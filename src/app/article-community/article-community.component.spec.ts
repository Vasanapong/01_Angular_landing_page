import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCommunityComponent } from './article-community.component';

describe('ArticleCommunityComponent', () => {
  let component: ArticleCommunityComponent;
  let fixture: ComponentFixture<ArticleCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleCommunityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
