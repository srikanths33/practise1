import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private loginservice:LoginService,private router:Router){}
  public loginform:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })
  login(){
    // console.log(this.loginform);
    this.loginservice.Login(this.loginform.value).subscribe(
      data=>{
        alert("login successful");
        // Go to dashboard
        this.router.navigateByUrl("/dashboard")

      },
      err=>{
        alert("invalid credentails")
      }
    )
  }
}
