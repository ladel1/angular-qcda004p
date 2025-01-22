import { Injectable } from '@angular/core';
import {User} from '../../classes/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users: User[] = [];

  constructor() {
    this._users = [
      new User("Sarah","sarah@gmail.com","123456"),
      new User("Pierre","pierre@gmail.com","Pa$$w0rd"),
      new User("Gael","gael@campus-eni.fr","654987")
    ]
  }

  getUsers(){
    return this._users;
  }

  findUserById(id:number){
    return this._users.find((user) => user.id === id);
  }

  findUserByEmail(email:string){
    return this._users.find((user) => user.email === email);
  }


}
