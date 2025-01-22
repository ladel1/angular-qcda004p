import { Component } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  email: string="";
  password: string="";

  constructor(
    private authService: AuthService
  ) {}

  onLogin(){
    this.authService.login(this.email, this.password);
    // reinit
    this.email=""
    this.password=""
  }

}
