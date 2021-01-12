import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenedArticleComponent } from './opened-article.component';

describe('OpenedArticleComponent', () => {
  let component: OpenedArticleComponent;
  let fixture: ComponentFixture<OpenedArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenedArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
