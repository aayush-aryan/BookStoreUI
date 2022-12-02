import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';

@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {

  cartQuantity: number = 0;
  showButton: boolean = false;
  showBag: boolean = true;
  BookId: any;
  userId : any;
  bookInfo: any;
  CartId:any;
  feedback: any;
  value: any;
  feedbackList: any;
  comment: any;
  bookQuantity:any

  constructor(private bookService: BookService,private snackBar:MatSnackBar, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    //this.quickView();
  
    this.BookId = localStorage.getItem('bookId')
    this.getBookDetail();

  }

  getBookDetail(){
    this.bookService.getallbooks().subscribe((res:any)=>{ 
      res.response.forEach((element:any) => {
        if(element.bookId == this.BookId){
          this.bookInfo = element;
          
          this.getAllFeedback();
          console.log("boofInfo", this.bookInfo);
        }  
      });
    }, error=>{
      console.log(error); 
    })
  }


  addFeedback() { 
    let reqdata = {
      comment: this.comment,
      rating: parseInt(this.value),
      bookId: parseInt(this.BookId)
    }
    console.log(reqdata);
    this.bookService.AddFeddback(reqdata).subscribe((response:any)=>{
      console.log("Feedback submitted successful", response);
      this.snackBar.open('Feedback submitted successfully', '', {
        duration:2000,
       }); 
      //this.getAllFeedback();
    })
  }

  getAllFeedback(){
    let data ={
      bookId: this.BookId
    }
    console.log(data)
    this.bookService.getAllFeedback(data).subscribe((res:any)=>{
      console.log("get feedback list",res);
      this.feedbackList = res.response;
      console.log(this.feedbackList);
      console.log(data)
    })
  }

  addToCart() {
    this.cartQuantity++;
    let reqdata ={
      userId: 0,
      bookId: parseInt(this.BookId),
     booksQty: this.cartQuantity
      //booksQty: this.bookQuantity
    }
    this.showButton=true;
    this.showBag=false;
    this.bookService.AddToCart(reqdata).subscribe((res:any)=>{
      console.log('cart Item Fetched', res)
    }),
    (    error: any)=>{
      console.log(error);
    }
   }

  plus() {
    this.cartQuantity++
    let readata ={
      bookId:this.BookId,
      bookQty: this.bookQuantity
    }
    this.bookService.AddToCart(readata).subscribe((res:any)=>{
      console.log("cart items fdetch", res);
    })
   }
  minus() {
    this.cartQuantity--
    let readata ={
      userId: 0,
      bookId:this.BookId,
      bookQty: this.cartQuantity
    }
    this.bookService.AddToCart(readata).subscribe((res:any)=>{
      console.log("cart items fdetch", res);
    })
   }

  

  addToWishlist() {
    let data = {
      bookId: this.BookId,
     
    }
    this.bookService.addwishlist(data).subscribe(
      (response: any) => {
        console.log('Add to wishlist', response);
        
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
