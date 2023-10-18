import { AdminUsersComponent } from './admin/admin/adminpages/admin-users/admin-users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { loginGuard } from './guards/login.guard';
import { adminGuard } from './guards/admin.guard';

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
      canActivate:[loginGuard]
    },
    {
      path:'admin',
      loadComponent: () => import  ('./admin/admin/admin.component').then(m => m.AdminComponent),
      title: 'Admin',
      canActivateChild:[adminGuard],
      children:[
         {
          path:'',
          loadComponent: () => import  ('./admin/admin/adminpages/dashboardadmin/dashboardadmin.component').then(m => m.DashboardadminComponent),
          title: 'Dashpord'
         },
         {
          path:'usersinfo',
          loadComponent: () => import  ('./admin/admin/adminpages/admin-users/admin-users.component').then(m => m.AdminUsersComponent),
          title: 'Users Info'
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
