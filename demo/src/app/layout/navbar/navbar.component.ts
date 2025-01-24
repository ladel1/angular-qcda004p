import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {User} from '../../classes/User';

@Component({
  selector: 'app-navbar',
  standalone: false,

  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  menu:any[]=[
    {name:"Home",route:"",checkAuth:false},
    {name:"blog",route:"blog",checkAuth:false},
    {name:"Cat Facts",route:"cat-facts",checkAuth:false},
    {name:"about",route:"about",checkAuth:false},
    {name:"Services",route:"#",checkAuth:false},
    {name:"Contact",route:"#",checkAuth:false},
    {name:"My Account",route:"my-account",checkAuth:true},// <---------
    {name:"Login",route:"login",checkAuth:false},
  ]

  isLoggedIn = false;
  connectedUser:User|null=null;

  constructor(private authService: AuthService,
              private router: Router,) {}

  // ngDoCheck(): void {
  //   this.isLoggedIn = this.authService.isAuthenticated();
  //   this.connectedUser = this.authService.getConnectedUser();
  //   }

  ngOnInit(): void {
       // this.isLoggedIn = this.authService.isAuthenticated();
       //  this.connectedUser = this.authService.getConnectedUser();
      this.authService.getState().subscribe((state)=>{
        console.log("state:",state)
        this.isLoggedIn= state.connectedUser!=null;
        this.connectedUser= state.connectedUser;
      })
    }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['/login']);
    this.isLoggedIn = this.authService.isAuthenticated();
  }


}
