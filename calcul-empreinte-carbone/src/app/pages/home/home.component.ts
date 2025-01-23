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

  constructor(private userService: UserService,
              private router: Router,) {}


  onLogin(username:string){
    this.userService.login(username);
    this.router.navigate(['summary']);
  }

}
