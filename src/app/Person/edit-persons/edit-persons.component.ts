import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/_models/person';
import { PersonService } from 'src/app/_services/person.service';
import { Input } from '@angular/core';
import { CountryService } from 'src/app/_services/country.service';

@Component({
  selector: 'app-edit-persons',
  templateUrl: './edit-persons.component.html',
  styleUrls: ['./edit-persons.component.css']
})
export class EditPersonsComponent implements OnInit {

  person:Person = new Person( 0, "","", new Date("1900/01/01"), "", "");

  countries:string [] = [];

  @Input() id = 0;

  constructor(private personService:PersonService, private router:Router, private countryService:CountryService) { }

  ngOnInit(): void {
    this.countryService.getCounteries().subscribe(
      response=> 
      {
        Object.values(response.data).forEach((element:any) => {
          this.countries.push(element.country);
        });
      }
    )
    this.personService.getPerson(this.id).subscribe(
      person=>{
        this.person = person;
      }
    )
  }

  delete(){
    this.personService.deletePerson(this.id).subscribe(
      a=> this.router.navigate([''])
    )
  }

  save()
  {
    if(this.person._id != 0)
    {
      this.personService.editPerson(this.person, this.id).subscribe(
        a=> this.router.navigate([''])
      )
    }
  }
}
