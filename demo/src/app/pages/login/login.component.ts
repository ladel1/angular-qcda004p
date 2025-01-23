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
    const StrongPasswordRegx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d)(?=.*[*!@$%^&:;<>,]).{8,}$/;
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,Validators.pattern(StrongPasswordRegx)]),
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
