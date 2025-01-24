import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
import {CatFactsService} from '../../services/cat-facts/cat-facts.service';

@Component({
  selector: 'app-cat-fact',
  standalone: false,

  templateUrl: './cat-fact.component.html',
  styleUrl: './cat-fact.component.css'
})
export class CatFactComponent implements OnInit {

    facts:any[]=[]
    isLoading:boolean=false;
    currentPage:number=1;
    from = 1;
    last = -1;

    constructor(private catFactsService:CatFactsService) {
    }

    async ngOnInit(): Promise<void> {
        // Observable
        this.fetchFacts(1)
        // Promise
       //this.httpClient.get(ENDPOINT_URL).toPromise();
       // firstValueFrom(this.httpClient.get(ENDPOINT_URL)).then(
       //   (response:any)=>{
       //       this.facts = response.data;
       //       this.isLoading=false;
       //   }
       // )
      // const reponse:any = await firstValueFrom(this.httpClient.get(ENDPOINT_URL));
      // this.facts = reponse.data;
      // this.isLoading=false;
    }

  async onPrevious() {
      if(this.currentPage==this.from) return
      this.fetchFacts(this.currentPage-1);
  }

  async onNext() {
    if(this.currentPage==this.last) return
    this.fetchFacts(this.currentPage+1);
  }

  private fetchFacts(pageNumber:number){
    this.isLoading = true;
    this.catFactsService.getCatFacts(pageNumber).subscribe(
      (response:any) => {
        this.facts = response.data;
        this.currentPage=response.current_page;
        this.from = response.from;
        this.last = response.last_page;
        this.isLoading=false;
      }
    )
  }
}
