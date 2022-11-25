import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  fullName:any
  constructor(private route:Router) { 
    this.fullName = localStorage.getItem('fullName');
  }

  ngOnInit(): void {
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
