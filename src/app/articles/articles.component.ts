import { ArticleService } from './../_services/article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css'],
})
export class ArticlesComponent implements OnInit {
  constructor(public articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getAllArticles();
  }
}
