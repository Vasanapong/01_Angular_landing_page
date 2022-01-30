import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleActivityComponent } from './article-activity.component';

describe('ArticleActivityComponent', () => {
  let component: ArticleActivityComponent;
  let fixture: ComponentFixture<ArticleActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleActivityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
