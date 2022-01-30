import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticleActivityComponent } from './article-activity/article-activity.component';
import { ArticleCocktailComponent } from './article-cocktail/article-cocktail.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleCommunityComponent } from './article-community/article-community.component';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleActivityComponent,
    ArticleCocktailComponent,
    FooterComponent,
    ArticleCommunityComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
