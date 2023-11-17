import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { loginGuard } from './guards/login.guard';
import { adminGuard } from './guards/admin.guard';
import { limitGuard } from './guards/limit.guard';

const routes: Routes = [
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
          path:'blog-post/:id',
          loadComponent: () => import  ('./pages/blog-post/blog-post.component').then(m => m.BlogPostComponent),
          title: 'Blog Post',
          pathMatch: 'full'
        },
        {
          path:'categories/:category',
          loadComponent: () => import  ('./pages/category/category.component').then(m => m.CategoryComponent),
          title: 'Categories'
        },
        {
          path:'authors/:name',
          loadComponent: () => import  ('./pages/author/author.component').then(m => m.AuthorComponent),
          title: 'Authors'
        }
      ]
    },
    {
      path:'admin/login',
      loadComponent: () => import  ('./admin/login/login.component').then(m => m.LoginComponent),
      title: 'Login',
      canActivate:[loginGuard],
   
    },
    {
      path:'admin/registration',
      loadComponent: () => import  ('./admin/registration/registration.component').then(m => m.RegistrationComponent),
      title: 'Registration',
    },
    {
      path:'admin',
      loadComponent: () => import  ('./admin/admin/admin.component').then(m => m.AdminComponent),
      title: 'Admin',
      canActivateChild:[adminGuard],
      children:[
         {
          path:'dashpord',
          loadComponent: () => import  ('./admin/admin/adminpages/dashboardadmin/dashboardadmin.component').then(m => m.DashboardadminComponent),
          title: 'Dashpord',
          canActivate:[limitGuard]
         },
         {
          path:'admin-usersinfo',
          loadComponent: () => import  ('./admin/admin/adminpages/admin-users/admin-users.component').then(m => m.AdminUsersComponent),
          title: 'Users Info',
          canActivate:[limitGuard]
         },
         {
          path:'admin-cotegory',
          loadComponent: () => import  ('./admin/admin/adminpages/admin-category/admin-category.component').then(m => m.AdminCategoryComponent),
          title: 'Admin Cotegory',
          canActivate:[limitGuard]
         },
         {
          path:'admin-post',
          loadComponent: () => import  ('./admin/admin/adminpages/admin-posts/admin-posts.component').then(m => m.AdminPostsComponent),
          title: 'Admin Posts',
          canActivate:[limitGuard]
         },
         {
          path:'admin-message',
          loadComponent: () => import  ('./admin/admin/adminpages/messages/messages.component').then(m => m.MessagesComponent),
          title: 'Admin Message',
          canActivate:[limitGuard]
         },
         {
          path:'author-posts',
          loadComponent: () => import  ('./admin/admin/adminpages/author-posts/author-posts.component').then(m => m.AuthorPostsComponent),
          title: 'Author Posts',
         },
         {
           path:'author-new-post',
           loadComponent: () => import  ('./admin/admin/adminpages/author-add-new-posts/author-add-new-posts.component').then(m => m.AuthorAddNewPostsComponent),
           title: 'Author New Post',
         },
      ]
    },                                    
    {
      path:'**',
      loadComponent: () => import  ('./pages/pages-not-found/pages-not-found.component').then(m => m.PagesNotFoundComponent),
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
       { scrollPositionRestoration: 'top' }
       )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
