import { Injectable } from '@angular/core';
import {Article} from '../../classes/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private _data:Article[] = []

  constructor() {
    this._data = [
      new Article("formation Angular 19","blablaba","Pierre"),
      new Article("Tuto PHP","blablaba","Lucas"),
      new Article("formation Nextjs 15","blablaba","Adel"),
      new Article("formation React Native","blablaba","Gaelle"),
    ]
  }

  getData(){
    return this._data;
  }

  addData(article: Article) {
    this._data.push(article );
  }

  findById(id: string) {
    return this._data.find(item => item.id == Number(id));
  }
}
