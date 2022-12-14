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
  getAllwishlist() {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.getService('WishList/GetAllBooksinWishList', true, header)
  }
  addwishlist(data: any) {
    console.log(data);
    this.token = localStorage.getItem("token")
    let header = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token,
      }),
    };
    return this.httpservice.postService('WishList/addBooksInWishList', data, true, header);
  }
  removewishlist(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({

        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token,
      }),
    };
    console.log("ganya", reqdata)
    //return this.httpservice.deleteServices('WishList/DeleteBookinWishList?WishListId=${reqdata.WishListId}', true, header);
    return this.httpservice.deleteServices(`WishList/DeleteBookinWishList?WishListId=${reqdata.wishListId}`, true, header);
  }
  AddToCart(reqdata: any) {
    console.log(reqdata);
    let headerOption = {
      headers: new HttpHeaders({
        //'Content-type': 'application/json-patch+json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.postService('Cart/AddBookToCart', reqdata, true, headerOption);
  }

  UpdateCart(reqdata: any) {
    console.log();
    let headerOption = {
      headers: new HttpHeaders({
        'Content-type': 'application/json-patch+json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.postService('Cart/UpdateCart', reqdata, true, headerOption);
  }

  getCart() {

    let headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log(headers);
    return this.httpservice.getService('Cart/GetAllBooksInCart', true, headers);
  }


  removeCart(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-Type': ' application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    console.log("reqdata")
   // return this.httpservice.deleteServices(`Cart/Delete/${data.CartId}`, true, header)
    return this.httpservice.deleteServices(`Cart/DeletebyCartId?CartId=${data.CartId}`, true, header)

  }
  getAllFeedback(data: any) {
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.getService(`Feedback/GetFeedback?bookId=${data.bookId}`, true, header);
  }
  AddFeddback(reqdata: any) {
    console.log(reqdata);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + this.token
      })
    }
    return this.httpservice.postService('Feedback/AddFeedback', reqdata, true, header);
  }

}
