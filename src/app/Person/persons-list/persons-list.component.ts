import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from 'src/app/_models/person';
import { PersonService } from 'src/app/_services/person.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditPersonsComponent } from '../edit-persons/edit-persons.component';
import { CreatePersonsComponent } from '../create-persons/create-persons.component';


@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.css']
})
export class PersonsListComponent implements OnInit {

  public persons:Person[] = [];

  

  constructor(private personService:PersonService, private router:Router, private modalService:NgbModal ) {
    
   }

  ngOnInit(): void {


    this.persons = this.personService.persons;

    // this.personService.getAllPersons().subscribe(
    //   persons=>{
    //     this.persons = persons;
    //   }
    // )
  }

  editPerson(id:number)
  {
    const modalRef = this.modalService.open(EditPersonsComponent, {
      scrollable:true, 
      windowClass:"editCustomModelClass"
    });
    modalRef.componentInstance.id = id;
    modalRef.result.then((result:any)=>{
        console.log(result);
      }, (reson:any)=>{

    });
  }
}
