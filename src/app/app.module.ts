import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { JoinComponent } from './pages/home/join/join.component';
import { CategoriesCardComponent } from './pages/home/categories-card/categories-card.component';
import { UsersCardComponent } from './pages/home/users-card/users-card.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CategoryComponent } from './pages/category/category.component';
import { AuthorComponent } from './pages/author/author.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { Route,RouterModule } from "@angular/router";
import { PagesNotFoundComponent } from './pages/pages-not-found/pages-not-found.component';
const routes:Route[] = [
  {
    path:'',
    component:HomeComponent,
    title: 'Home'
  },
 {
    path:'blog',
    component:BlogComponent,
    title: 'Blog'
  }, 
  {
    path:'about-us',
    component:AboutUsComponent,
    title:'About-Us'
  },
  {
    path:'contact-us',
    component:ContactComponent,
    title: 'Contact-Us'
  },
  {
    path:'privacy-policy',
    component:PrivacyPolicyComponent,
    title: 'Privacy-Policy'
  },
  {
    path:'privacy-policy',
    component:PrivacyPolicyComponent,
    title: 'Privacy-Policy'
  },{
    path:'**',
    component: PagesNotFoundComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    JoinComponent,
    CategoriesCardComponent,
    UsersCardComponent,
    BlogComponent,
    BlogPostComponent,
    AboutUsComponent,
    CategoryComponent,
    AuthorComponent,
    ContactComponent,
    PrivacyPolicyComponent,
    PagesNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
