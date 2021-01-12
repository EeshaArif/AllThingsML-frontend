import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-opened-article',
  templateUrl: './opened-article.component.html',
  styleUrls: ['./opened-article.component.css'],
})
export class OpenedArticleComponent implements OnInit {
  articleId = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const Id = this.route.snapshot.params.id;
    this.articleId = Id;
  }
}
