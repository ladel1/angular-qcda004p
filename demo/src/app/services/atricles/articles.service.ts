import { Injectable } from '@angular/core';
import {Article} from '../../classes/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private _data:Article[] = []

  constructor() {
    this._data = [
      {id:1,title:"Tuto formation Angular 19",content:"blablaba",author:"Pierre"},
      {id:2,title:"Tuto formation PHP",content:"blablaba",author:"Lucas",createdAt: new Date("2025-01-15")},
      {id:3,title:"Tuto formation Nextjs 15",content:"blablaba",author:"Adel",createdAt: new Date("2025-01-11")},
      {id:4,title:"Tuto formation React Native",content:"blablaba",author:"Gaelle",createdAt: new Date("2025-01-21")},
    ]
  }

  getData(){
    return this._data;
  }

  addData(article: Article) {
    this._data.push(article);
  }
}
