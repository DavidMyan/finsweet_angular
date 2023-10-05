import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CategoryComponent } from './pages/category/category.component';
import { AuthorComponent } from './pages/author/author.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { Route,RouterModule } from "@angular/router";
import { PagesNotFoundComponent } from './pages/pages-not-found/pages-not-found.component';
import { LayoutComponent } from './layout/layout.component';
const routes:Route[] = [
  {
    path:'',
    component: LayoutComponent,
    children:[
        {
          path:'',
          component:HomeComponent,
          title: 'Home'
        },
        {
          path:'',
          redirectTo: 'home',
          pathMatch: 'full'
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
          path:'blog-post',
          component:BlogPostComponent,
          title: 'Blog Post'
        },
        {
          path:'categories',
          component:CategoryComponent,
          title: 'Categories'
        },
        {
          path:'authors',
          component:AuthorComponent,
          title: 'Authors'
        }
      ]
    },
    {
      path:'**',
      component: PagesNotFoundComponent
    }
]
@NgModule({
    declarations: [
        AppComponent,
        PagesNotFoundComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' }),
    ]
})
export class AppModule { }
