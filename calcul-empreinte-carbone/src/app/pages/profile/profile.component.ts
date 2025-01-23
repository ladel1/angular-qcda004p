import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,

  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
    name:string|null = ""

    constructor(private router:ActivatedRoute) {}

    ngOnInit(): void {
        this.name = this.router.snapshot.paramMap.get('name');
    }

}
