import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  fullName:any
   showContainer: boolean=true;

  constructor(private route:Router,public breakpointObserver: BreakpointObserver) { 
    this.fullName = localStorage.getItem('fullName');
  }

  ngOnInit(): void {
    // this.breakpointObserver
    //   .observe(['(min-width: 400px)'])
    //   .subscribe((state: BreakpointState) => {
    //     if (state.matches) {
    //       this.showContainer = true;
    //     } else {
    //       this.showContainer = false;
    //     }
    //   });
  }

  Logout() {
    localStorage.clear();
    this.route.navigateByUrl('/login')
  }
  wishlist() {
    this.route.navigateByUrl("/dashboard/wish")
  }

  GetAllBook() {
    this.route.navigateByUrl("/dashboard/GetAllbooks")
  }
  GetAllCart() {
    this.route.navigateByUrl("/dashboard/cart")
  }

}
