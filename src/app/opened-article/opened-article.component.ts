import { Article } from './../_models/articleModel';
import { ArticleService } from './../_services/article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opened-article',
  templateUrl: './opened-article.component.html',
  styleUrls: ['./opened-article.component.css'],
})
export class OpenedArticleComponent implements OnInit {
  article?: Article;
  constructor(
    private route: ActivatedRoute,
    public articleService: ArticleService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const Id = Number(params.get('id'));
      if (Id != null) {
        this.articleService.getArticleOfId(Id).subscribe((articles) => {
          this.article = articles.articles_list[0];
        });
      }
    });
  }
}
