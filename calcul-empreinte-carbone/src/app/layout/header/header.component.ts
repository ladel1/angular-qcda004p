import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  standalone: false,

  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  nomUtilisateur:string='Adel'

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
        this.nomUtilisateur = this.userService.getUsername();
    }



}
