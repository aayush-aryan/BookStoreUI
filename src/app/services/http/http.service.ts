import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  baseurl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }
  
  postService(Url: string, reqdata: any, token: boolean = false, httpOptions: any = {}) {
    return this.httpClient.post(this.baseurl + Url, reqdata, token && httpOptions);
  }

  putService(Url: string, reqdata: any, token: boolean = false, httpOptions: any = {}) {
    return this.httpClient.put(this.baseurl + Url, reqdata, token && httpOptions);
  }

  getService(Url: string,token: boolean = false, httpOptions: any = {}) {
    return this.httpClient.get(this.baseurl + Url, token && httpOptions);
  }

  deleteServices(url: string,  token: Boolean = true, httpOptions: any = {}) {
    return this.httpClient.delete(this.baseurl + url, token && httpOptions)
  }
}
