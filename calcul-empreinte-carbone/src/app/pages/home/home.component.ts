import { Component } from '@angular/core';
import {UserService} from '../../services/user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  login:string="";
  password:string="";

  messageError:string="";

  constructor(private userService: UserService,
              private router: Router,) {}


  onLogin(username:string){
    if(this.login.length<3){
      this.messageError="Le champs login doit avoir min 3 caractères!";
      return;
    }
    if(this.password.length<6){
      this.messageError="Le champs mot de passe doit avoir min 6 caractères!";
      return;
    }
    this.userService.login(username);
    this.router.navigate(['summary']);
  }

}
