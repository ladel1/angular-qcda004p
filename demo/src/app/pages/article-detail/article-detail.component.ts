import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticlesService} from '../../services/atricles/articles.service';
import {Article} from '../../classes/Article';

@Component({
  selector: 'app-article-detail',
  standalone: false,

  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent implements OnInit {

  article:Article = new Article("","","");
  errorMessage = ""

  constructor(
    private route:ActivatedRoute,
    private articleService:ArticlesService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(!id) {
      this.errorMessage = "No such article";
      return;
    }
    const art = this.articleService.findById(id);
    if(!art) {
      this.errorMessage = "No such article";
      return;
    }
    this.article = art;
  }

}
