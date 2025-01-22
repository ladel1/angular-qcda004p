import { Component } from '@angular/core';
import {ArticlesService} from '../../../../services/atricles/articles.service';
import {Article} from '../../../../classes/Article';

@Component({
  selector: 'app-new-article-form',
  standalone: false,

  templateUrl: './new-article-form.component.html',
  styleUrl: './new-article-form.component.css'
})
export class NewArticleFormComponent {

  title:string=""
  content:string=""
  author:string=""


  constructor(private articleService:ArticlesService) {}

  onAdd(){

    // create article
    const article:Article = new Article(this.title,this.content,this.author);
    // add to service
    this.articleService.addData(article);
    //
    this.title=""
    this.content=""
    this.author=""
  }

}
