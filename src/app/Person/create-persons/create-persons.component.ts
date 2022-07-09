import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/_models/person';
import { CountryService } from 'src/app/_services/country.service';
import { PersonService } from 'src/app/_services/person.service';

@Component({
  selector: 'app-create-persons',
  templateUrl: './create-persons.component.html',
  styleUrls: ['./create-persons.component.css']
})
export class CreatePersonsComponent implements OnInit {

  person:Person = new Person( 0, "","", new Date("1999/01/01"), "", "");
  
  countries:string [] = [];

  constructor(private pesronServeice:PersonService, private router:Router, private countryService:CountryService) { }

  ngOnInit(): void {
    this.countryService.getCounteries().subscribe(
      response=> 
      {
        Object.values(response.data).forEach((element:any) => {
          this.countries.push(element.country);
        });
      }
    )
  }

  createPerson()
  {
    this.pesronServeice.createPerson(this.person).subscribe(
      a=>
      {
        this.router.navigate(['']);
      }
    )
  }

}
