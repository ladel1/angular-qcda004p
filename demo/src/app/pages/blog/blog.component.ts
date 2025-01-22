import {Component, OnInit} from '@angular/core';
import {ArticlesService} from '../../services/atricles/articles.service';
import {Article} from '../../classes/Article';

@Component({
  selector: 'app-blog',
  standalone: false,

  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  name="Blog"
  articles: Article[]=[];

  constructor(public articlesService: ArticlesService) {}

  ngOnInit(): void {
        this.articles = this.articlesService.getData();
    }

}
