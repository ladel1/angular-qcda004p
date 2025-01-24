import { Component } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm: FormGroup;
  isSubmitted = false;

  constructor(
    private authService: AuthService,
    private httpClient:HttpClient
  ) {
    const StrongPasswordRegx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d)(?=.*[*!@$%^&:;<>,]).{8,}$/;
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

  onLogin(){
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      console.log("Login form invalid");
      return;
    }

    const body = {
      email:this.loginForm.value.email,
      password:this.loginForm.value.password
    }
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    this.httpClient.post("http://localhost:3000",body, {headers}).subscribe(
      {
        next:(response:any)=>{
          console.log("reponse",response.user)
          this.authService.login(response.user.id,response.user.email,response.user.username);
          console.log(response)
        },
        error:(error)=>{
          console.log(error);
        },
        complete:()=>{
          console.log("fin de la reponse");
          // reinit
          this.loginForm.reset();
          this.isSubmitted = false;
        }
      }
    )
  }

  checkErrors(controlName: string) {
    if(!this.isSubmitted) return null;
    const control  = this.loginForm.get(controlName);
    if(!control || !control.errors) return null;

    return Object.keys(control.errors).map(key => {
      switch (key) {
        case 'required':
          return 'This field is required.';
        case 'minlength':
          return `Minimum length is ${control.errors?.[key].requiredLength}.`;
        case 'email':
          return 'Invalid email format.';
        case 'pattern':
          return 'Please put a strong Password, and must be at least 8 characters and contains At least one digit, At least one lowercase character, At least one uppercase character, At least one special character.';
        default:
          return 'Invalid input.';
      }
    });

    return [];
  }

}
