import { Injectable } from '@angular/core';
import {UsersService} from '../users/users.service';
import {User} from '../../classes/User';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // simulate session
  private _connectedUser:User|null=null;

  constructor(
    private usersService: UsersService,
    private router: Router,
  ) { }

  login(email: string, password: string) {
    // find user
    const user: User|undefined = this.usersService.findUserByEmail(email);
    if (!user || user.password !== password) {
      throw new Error("Email or password is incorrect!");
    }
    this._connectedUser = user;
    this.router.navigate(['/my-account']);
  }

  logout() {
    this._connectedUser = null;
  }

  isAuthenticated(){
    return this._connectedUser!==null;
  }

  getConnectedUser(){
    return this._connectedUser;
  }

}
