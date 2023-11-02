import { AuthorPostsComponent } from './admin/author-page/author-posts/author-posts.component';
import { AuthorPageComponent } from './admin/author-page/author-page.component';
import { RegistrationComponent } from './admin/registration/registration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { loginGuard } from './guards/login.guard';
import { adminGuard } from './guards/admin.guard';
import { authorGuard } from './guards/author.guard';

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
      path:'author-page',
      loadComponent: () => import  ('./admin/author-page/author-page.component').then(m => m.AuthorPageComponent),
      title: 'Author Page',
      canActivateChild:[authorGuard],
      children:[
        {
          path:'',
          redirectTo: 'author-posts',
          pathMatch: 'full'
        },
        {
         path:'author-posts',
         loadComponent: () => import  ('./admin/author-page/author-posts/author-posts.component').then(m => m.AuthorPostsComponent),
         title: 'Author Posts'
        },
        {
          path:'author-new-post',
          loadComponent: () => import  ('./admin/author-page/author-add-new-posts/author-add-new-posts.component').then(m => m.AuthorAddNewPostsComponent),
          title: 'Author New Post'
         },
      ]
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
            path:'',
            redirectTo: 'dashpord',
            pathMatch: 'full'
          },
         {
          path:'dashpord',
          loadComponent: () => import  ('./admin/admin/adminpages/dashboardadmin/dashboardadmin.component').then(m => m.DashboardadminComponent),
          title: 'Dashpord'
         },
         {
          path:'admin-usersinfo',
          loadComponent: () => import  ('./admin/admin/adminpages/admin-users/admin-users.component').then(m => m.AdminUsersComponent),
          title: 'Users Info'
         },
         {
          path:'admin-cotegory',
          loadComponent: () => import  ('./admin/admin/adminpages/admin-category/admin-category.component').then(m => m.AdminCategoryComponent),
          title: 'Admin Cotegory'
         },
         {
          path:'admin-post',
          loadComponent: () => import  ('./admin/admin/adminpages/admin-posts/admin-posts.component').then(m => m.AdminPostsComponent),
          title: 'Admin Posts'
         },
         {
          path:'admin-message',
          loadComponent: () => import  ('./admin/admin/adminpages/messages/messages.component').then(m => m.MessagesComponent),
          title: 'Admin Message'
         },
         {
          path:'admin-register',
          loadComponent: () => import  ('./admin/admin/adminpages/admin-register/admin-register.component').then(m => m.AdminRegisterComponent),
          title: 'Admin Register'
         }
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
