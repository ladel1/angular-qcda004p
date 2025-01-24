import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {
  constructor(private httpClient:HttpClient) {  }

  getCatFacts(currentPage:number){
    const ENDPOINT_URL:string=`https://catfact.ninja/facts?page=${currentPage}`;
    return this.httpClient.get(ENDPOINT_URL);
  }

}
