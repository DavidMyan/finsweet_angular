import { Component } from '@angular/core';
import { AllPosts, CategoryCard } from 'src/app/modues/glob_muduls';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { NgFor } from '@angular/common';
import { JoinComponent } from '../home/join/join.component';
import { CategoriesCardComponent } from "../home/categories-card/categories-card.component";
import { DataService } from 'src/app/http.service';

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
  posts:AllPosts[] = []
  category: CategoryCard[] = [];
  limitCategory = 4;
  limitPosts = 7;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCategory(this.limitCategory).subscribe(data => {
      this.category = data;
    });
    this.dataService.getPosts(this.limitPosts).subscribe(data =>{
      this.posts = data
    })

  }
}
