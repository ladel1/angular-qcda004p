import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tester';
  message="hey header"

  onRecieveData(event:string){
    console.log("Je suis ton père:",event)
  }

}
