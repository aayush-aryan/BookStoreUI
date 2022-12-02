import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetallbooksComponent } from './components/getallbooks/getallbooks.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { QuickviewComponent } from './components/quickview/quickview.component';
import { RegisterComponent } from './components/register/register.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';


const routes: Routes = [
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path: 'GetAllbooks', component:GetallbooksComponent},
    {path:'wish', component:WishlistComponent},
    {path:'cart',component:CartComponent},
    {path:'order', component:OrderComponent},
    {path:'quickview/:bookId',component: QuickviewComponent},
],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
