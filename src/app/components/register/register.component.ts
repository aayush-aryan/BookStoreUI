import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup
  submitted = false;
  constructor(private formBuilder:FormBuilder, private user:UserService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', Validators.required],
    }); 
  }
  onSubmit(){
    this.submitted=true;
    console.log("inputs", this.registerForm.value);
    if(this.registerForm.valid){
      console.log("valid-Details",this.registerForm.value);
      let data= {
        userId:0,
        fullName:this.registerForm.value.fullName,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password,
        mobileNumber:this.registerForm.value.mobileNumber,
      }
      this.user.register(data).subscribe((res:any)=>{
        console.log(res);
      })
    }
      else{
        console.log("Enter valid data");
      }  

}

}
