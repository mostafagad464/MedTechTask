import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Person } from '../_models/person';
@Injectable({
  providedIn: 'root'
})
export class PersonService {

  baseUrl = "http://tekdi-challenges.appspot.com/api/People";


  constructor(private http:HttpClient) 
  { }

  createPerson(person:Person)
  {
    return this.http.post<Person>(this.baseUrl, Person);
  }
  getAllPersons()
  {
    return this.http.get<Person[]>(this.baseUrl);
  }
  getPerson(id:number)
  {
    return this.http.get<Person>(this.baseUrl+"/"+id);
  }
  editPerson(editedPerson:Person, id:number)
  {
    return this.http.patch<Person>(this.baseUrl+"/"+id, editedPerson);
  }
  deletePerson(id:number)
  {
    return this.http.delete<boolean>(this.baseUrl+"/"+id);
  }
}
