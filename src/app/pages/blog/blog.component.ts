import { Component } from '@angular/core';
import { AllPosts, CategoryCard } from 'src/app/modues/glob_muduls';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { NgFor } from '@angular/common';
import { JoinComponent } from '../home/join/join.component';
import { CategoriesCardComponent } from "../home/categories-card/categories-card.component";

@Component({
    standalone: true,
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css'],
    imports: [
        AllPostsComponent,
        JoinComponent,
        NgFor,
        CategoriesCardComponent
    ]
})
export class BlogComponent {
  category:CategoryCard[] = [
    {
      id:1,
      image:'assets/img/home_main/icon_1.png',
      title:'Business',
      short_description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      id:2,
      image:'assets/img/home_main/icon_2.png',
      title:'Startup',
      short_description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      id:3,
      image:'assets/img/home_main/icon_3.png',
      title:'Economy',
      short_description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      id:4,
      image:'assets/img/home_main/icon_4.png',
      title:'Technology',
      short_description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    }
  ];
  posts:AllPosts[] = [
    {
      id: 1,
      image:'assets/img/blog_main/blog_section_1_img_1.png',
      category: 'Startup',
      title: 'Design tips for designers that cover everything you need',
      short_description:`Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident.`
    },
    {
      id: 2,
      image:'assets/img/blog_main/blog_section_1_img_2.png',
      category: 'BUSINESS',
      title: 'How to build rapport with your web design clients',
      short_description:`Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident.`
    },
    {
      id: 3,
      image:'assets/img/blog_main/blog_section_1_img_3.png',
      category: 'Startup',
      title: 'Logo design trends to avoid in 2022',
      short_description:`Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident.`
    },
    {
      id: 4,
      image:'assets/img/blog_main/blog_section_1_img_4.png',
      category: 'TECHNOLOGY',
      title: '8 Figma design systems you can download for free today',
      short_description:`Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident.`
    },
    {
      id: 5,
      image:'assets/img/blog_main/blog_section_1_img_1.png',
      category: 'Startup',
      title: 'Font sizes in UI design: The complete guide to follow',
      short_description:`Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident.`
    },
  ]
}
