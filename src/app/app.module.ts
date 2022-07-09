import { HttpClientModule } from '@angular/common/http';
import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonModule } from './Person/person.module';
import { LayoutComponent } from './Layout/layout/layout.component';
import { LayoutModule } from './Layout/layout.module';
import { Person } from './_models/person';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    PersonModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  persons:Person[] = [];

  ngOnInit(): void {
    this.persons = [
      new Person( 1, "mostafa@gmial.com","Mostafa", new Date("1999/02/22"), "p3.jpg", "EG"), 
      new Person( 1, "ali@gmial.com","Ali", new Date("1992/02/22"), "p3.jpg", "US"), 
      new Person( 1, "ahmed@gmial.com","Ahmed", new Date("2000/02/22"), "p3.jpg", "UK"), 
      new Person( 1, "salma@gmial.com","Salma", new Date("1989/02/22"), "p3.jpg", "Egypt"), 
      new Person( 1, "mona@gmial.com","Mona", new Date("2003/02/22"), "p3.jpg", "Egypt")
    ]
  }
}
