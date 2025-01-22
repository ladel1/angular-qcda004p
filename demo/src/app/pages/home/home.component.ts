import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

    name: string="Home";
    prenom:string = "Steve"
    age:number = 26;
    // pour la mini calculatrice
    x:number = 0;
    y:number = 0;
    //operator
    operator:string="";
    // result
    result:number = 0;

    ngOnInit(): void {
      // appels API...
      console.log('HomeComponent ngOnInit....');
    }

    onCalculate(){
      console.log(this.operator);
      switch (this.operator) {
        case "+": this.result=this.x+this.y;break;
        case "-": this.result=this.x-this.y;break;
        case "*": this.result=this.x*this.y;break;
        default:
          console.error("Operator invalide!");
      }
    }

    ngOnDestroy(): void {
      console.log('HomeComponent ngOnDestroy...');
    }


}
