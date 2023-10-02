import { Component } from '@angular/core';
import { AllPosts, SingleAuthor } from 'src/app/modues/glob_muduls';
import { SingleAuthorComponent } from './single-author/single-author.component';
import { NgFor } from '@angular/common';
import { AllPostsComponent } from '../blog/all-posts/all-posts.component';

@Component({
  standalone:true,
  imports:[
    SingleAuthorComponent,
    NgFor,
    AllPostsComponent
  ],
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {
  posts:AllPosts[] = [
    {
      id: 1,
      image:'assets/img/blog_main/blog_section_1_img_2.png',
      category: 'Startup',
      title: 'Design tips for designers that cover everything you need',
      short_description:`Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident.`
    },
    {
      id: 2,
      image:'assets/img/blog_main/blog_section_1_img_1.png',
      category: 'BUSINESS',
      title: 'How to build rapport with your web design clients',
      short_description:`Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint
                        occaecat cupidatat non proident.`
    },
  ];
  singleAuthor:SingleAuthor[] = [
    {
      id:1,
      image:'assets/img/home_main/section_user_3.png',
      title:'Hey there, I’m Andrew Jonhson and welcome to my Blog',
      short_description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.'
    },
  ];
}
