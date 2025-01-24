import { Injectable } from '@angular/core';
import {UsersService} from '../users/users.service';
import {User} from '../../classes/User';
import {Router} from '@angular/router';
import {BehaviorSubject} from 'rxjs';

interface AuthState{
  connectedUser:User|null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // simulate session
  private _connectedUser:User|null=null;

  private state:BehaviorSubject<AuthState> = new BehaviorSubject<AuthState>({ connectedUser:null});
  // private state$ = this.state.asObservable()
  constructor(
    private usersService: UsersService,
    private router: Router,
  ) { }

  updateState(user:User|null):void {
    console.log("Update State",user);
    this.state.next({connectedUser:user});
  }

  getState(){
    return this.state.asObservable();
  }


  login(id:number,email: string, username: string) {
    // find user
    // const user: User|undefined = this.usersService.findUserByEmail(email);
    // if (!user || user.password !== password) {
    //   throw new Error("Email or password is incorrect!");
    // }

    this._connectedUser = new User(username,email,"pas de mot de passe",id);
    console.log("login",this._connectedUser);
    this.updateState(this._connectedUser)
    this.router.navigate(['/my-account']);
  }

  logout() {
    this._connectedUser = null;
    this.updateState(null)
  }

  isAuthenticated(){
    return this._connectedUser!==null;
  }

  getConnectedUser(){
    return this._connectedUser;
  }

}
