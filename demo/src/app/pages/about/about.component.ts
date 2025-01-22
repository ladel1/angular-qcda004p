import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,

  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  name: string = 'About';
  isAuthenticated: boolean = false;

  onLogin(): void {
    this.isAuthenticated = true;
    console.log(this.isAuthenticated)
  }

  onLogout(): void {
    this.isAuthenticated = false;
    console.log(this.isAuthenticated)
  }

}
