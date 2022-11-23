import { Injectable } from '@angular/core';
import { HttpService } from './http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any;
  constructor(private httpService: HttpService) {
    this.token=localStorage.getItem("token")
   }

   register(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpService.postService('User/register', reqdata, false, header)
  }

  login(reqdata: any) {
    console.log(reqdata)
    let header = {
      Headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    //return this.httpService.postService(`User/login?Email=${reqdata.Email}&Password=${reqdata.Password}`, reqdata, false, header)
    return this.httpService.postService('User/login?Email=log2aayusharyan%40gmail.com&Password=aayush12', reqdata, false, header)
  }
}
