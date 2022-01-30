import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCocktailComponent } from './article-cocktail.component';

describe('ArticleCocktailComponent', () => {
  let component: ArticleCocktailComponent;
  let fixture: ComponentFixture<ArticleCocktailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleCocktailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCocktailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
