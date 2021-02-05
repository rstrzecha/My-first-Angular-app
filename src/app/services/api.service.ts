import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURl: string = 'https://reqres.in/api/users';

  apiData = {};

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get(this.apiURl).subscribe(
      data => { 
        console.log(data);
        this.apiData = data;
      }
    );
  }



}
