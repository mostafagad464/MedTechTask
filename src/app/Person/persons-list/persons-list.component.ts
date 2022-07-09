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
    // this.persons = [
    //   new Person( 1, "mostafa@gmail.com","Mostafa", new Date("1999/02/22"), "https://www.google.com/search?q=avatars+for+profile&sxsrf=ALiCzsZT0XZ_fCFfa6lo3Kq0dR2ZdxL1hQ:1657283746681&tbm=isch&source=iu&ictx=1&vet=1&fir=rfsiwMzsfYs_XM%252C6tmU3cCCR334-M%252C_%253BMV9dWdy0ZY_UPM%252Cj1o201ERqM1BVM%252C_%253BgRmIHR3owD_V0M%252CpmE0x0RqkiBF7M%252C_%253BMzu6oqYr5yfJlM%252C1_SEf6jhfzyFVM%252C_%253BwPoPq5E8MP1vkM%252CXH_QaGgtmox_tM%252C_%253Bhi_JGpgXhRZTNM%252COO-07cqswpaFOM%252C_%253B-zGj0lEDzVXFtM%252CmfTXeLzTwmQxOM%252C_%253BH9gdfzwP9anKAM%252CSra6X8aKh_qwmM%252C_%253BNX76Mapph7rjnM%252CrrdZaDp-f1qz-M%252C_%253Brqu0lH0JjD7qCM%252ChcVDdyIS36g6CM%252C_%253B-lTUaCeOKKkgGM%252CQw-Dwpjx9vqvxM%252C_%253B7E1QzqLBNrkp-M%252CyEZXS1PQ084eEM%252C_%253BJxSfWpAYqZ-AyM%252CwR0dxt-ZiuOIoM%252C_%253BdxITsiS565eqjM%252CFcUgeaJdaWL_gM%252C_%253B31dvrCPLIkewdM%252Ct12EXnbCus7-DM%252C_&usg=AI4_-kS06wxGaUzH67MX8o67u1MnT54QvA&sa=X&ved=2ahUKEwiN3YyIp-n4AhUFnf0HHXtgBlUQ9QF6BAgMEAE#imgrc=-zGj0lEDzVXFtM", "EG"), 
    //   new Person( 2, "ali@gmail.com","Ali", new Date("1992/02/22"), "p3.jpg", "US"), 
    //   new Person( 3, "ahmed@gmail.com","Ahmed", new Date("2000/02/22"), "p3.jpg", "UK"), 
    //   new Person( 4, "salma@gmail.com","Salma", new Date("1989/02/22"), "p3.jpg", "Egypt"), 
    //   new Person( 5, "mona@gmail.com","Mona", new Date("2003/02/22"), "p3.jpg", "Egypt")
    // ]

    this.personService.getAllPersons().subscribe(
      persons=>{
        this.persons = persons;
      }
    )
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
