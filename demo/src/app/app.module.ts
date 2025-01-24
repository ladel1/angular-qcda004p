import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './layout/footer/footer.component';
import {ArticlesService} from './services/atricles/articles.service';
import { BlogComponent } from './pages/blog/blog.component';
import { SinglePostComponent } from './pages/blog/components/single-post/single-post.component';
import { NewArticleFormComponent } from './pages/blog/components/new-article-form/new-article-form.component';
import { ArticleDetailComponent } from './pages/article-detail/article-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { CatFactComponent } from './pages/cat-fact/cat-fact.component';
import {provideHttpClient} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    FooterComponent,
    BlogComponent,
    SinglePostComponent,
    NewArticleFormComponent,
    ArticleDetailComponent,
    LoginComponent,
    MyAccountComponent,
    CatFactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ArticlesService,
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
