import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {BlogComponent} from './pages/blog/blog.component';
import {AboutComponent} from './pages/about/about.component';
import {ArticleDetailComponent} from './pages/article-detail/article-detail.component';
import {LoginComponent} from './pages/login/login.component';
import {MyAccountComponent} from './pages/my-account/my-account.component';
import {authGuard} from './guards/auth.guard';
import {CatFactComponent} from './pages/cat-fact/cat-fact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'cat-facts', component: CatFactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'my-account', component: MyAccountComponent , canActivate:[authGuard]},
  { path: 'about', component: AboutComponent },
  { path: 'blog/:id', component: ArticleDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
