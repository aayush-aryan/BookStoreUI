import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  token: any;

  constructor(private httpservice: HttpService) {
    this.token = localStorage.getItem("token")
  }

  getallbooks() {
    console.log();
    let headerOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
        //'Authorization':  this.token,
      })
    }
    return this.httpservice.getService('Book/GetAllBooks', true, headerOption);
  }
}
