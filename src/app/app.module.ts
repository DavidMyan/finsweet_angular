import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
          loadComponent: () => import  ('./pages/home/home.component').then(m => m.HomeComponent),
          title: 'Home'
        },
        {
          path:'',
          redirectTo: 'home',
          pathMatch: 'full'
        },
        {
          path:'blog',
          loadComponent: () => import  ('./pages/blog/blog.component').then(m => m.BlogComponent),
          title: 'Blog'
        },
        {
          path:'about-us',
          loadComponent: () => import  ('./pages/about-us/about-us.component').then(m => m.AboutUsComponent),
          title:'About-Us'
        },
        {
          path:'contact-us',
          loadComponent: () => import  ('./pages/contact/contact.component').then(m => m.ContactComponent),
          title: 'Contact-Us'
        },
        {
          path:'privacy-policy',
          loadComponent: () => import  ('./pages/privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent),
          title: 'Privacy-Policy'
        },
        {
          path:'blog-post',
          loadComponent: () => import  ('./pages/blog-post/blog-post.component').then(m => m.BlogPostComponent),
          title: 'Blog Post'
        },
        {
          path:'categories',
          loadComponent: () => import  ('./pages/category/category.component').then(m => m.CategoryComponent),
          title: 'Categories'
        },
        {
          path:'authors',
          loadComponent: () => import  ('./pages/author/author.component').then(m => m.AuthorComponent),
          title: 'Authors'
        }
      ]
    },
    {
      path:'**',
      loadComponent: () => import  ('./pages/pages-not-found/pages-not-found.component').then(m => m.PagesNotFoundComponent),
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
        HttpClientModule
    ]
})
export class AppModule { }
