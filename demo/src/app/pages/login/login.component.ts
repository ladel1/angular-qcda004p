import { Component } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

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
    private authService: AuthService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    })
  }

  onLogin(){
    this.isSubmitted = true;
    if(this.loginForm.invalid){
      console.log("Login form invalid");
      return;
    }
    this.authService.login(this.loginForm.value.email,this.loginForm.value.password);
    // reinit
    this.loginForm.reset();
    this.isSubmitted = false;
  }

}
