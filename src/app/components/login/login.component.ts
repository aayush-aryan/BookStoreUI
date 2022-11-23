import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup
  token:any
  constructor(private formbuilder: FormBuilder, private user:UserService, private router:Router, private snackbar:MatSnackBar) { 
    this.token = localStorage.getItem("token");
  }

  ngOnInit(): void {

    this.loginForm = this.formbuilder.group({
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
    });
    
  }
  onSubmitloginForm(){
    console.log("Login-inputs", this.loginForm.value);
    if(this.loginForm.valid){
      console.log("valid-Creditionals",this.loginForm.value);
      let data= {
        Email:this.loginForm.value.email,
        Password:this.loginForm.value.password,
      }
      this.user.login(data).subscribe((res:any)=>{
        console.log(res);
        localStorage.setItem("token", res.response.token);
        // this.router.navigateByUrl("/dashboard/GetAllbooks");
        this.snackbar.open('Login successfully', '', {
          duration:2000,
         }); 
       
      })
  }
  else{
    console.log("Enter valid Email And Password!!!!");
  }
  }

}
