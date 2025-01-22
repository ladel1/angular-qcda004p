import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  menu:string[]=[
    "Home",
    "Blog",
    "About",
    "Services",
    "Contact",
  ]
  active="Blog";
}
