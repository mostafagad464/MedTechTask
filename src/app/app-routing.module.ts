import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePersonsComponent } from './Person/create-persons/create-persons.component';
import { PersonsListComponent } from './Person/persons-list/persons-list.component';

const routes: Routes = [
  {path:'', component:PersonsListComponent},
  {path:'add', component:CreatePersonsComponent},
  {path:'edit/:id', component:PersonsListComponent},
  {path:'delete/:id', component:PersonsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
