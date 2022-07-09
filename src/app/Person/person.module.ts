import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPersonsComponent } from './edit-persons/edit-persons.component';
import { CreatePersonsComponent } from './create-persons/create-persons.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouterLink, RouterModule } from '@angular/router';
import { GetAgeUsingDoBPipe } from '../_pipes/get-age-using-do-b.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditPersonsComponent,
    CreatePersonsComponent,
    PersonsListComponent,
    GetAgeUsingDoBPipe
  ],
  imports: [
    CommonModule, 
    RouterModule,
    FormsModule
  ], 
  exports: [

  ]
})
export class PersonModule {


}
