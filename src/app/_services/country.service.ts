import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private baseUrl = "https://api.first.org/data/v1/countries";

  constructor(private http:HttpClient) { }

  getCounteries()
  {
    return this.http.get<any>(this.baseUrl);
    // return this.http.get<Country[]>(this.baseUrl);
  }

}
