import { Component, OnInit } from '@angular/core';
import { AllPosts, CategoryCard } from 'src/app/modues/glob_muduls';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { NgFor } from '@angular/common';
import { JoinComponent } from '../home/join/join.component';
import { CategoriesCardComponent } from "../home/categories-card/categories-card.component";
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';
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
export class BlogComponent implements OnInit{
  posts:AllPosts[] = []
  category: CategoryCard[] = [];

  constructor(private http:HttpService){}
  ngOnInit(): void {
    this.http.getItem<AllPosts[]>(`${environment.posts.get}`).subscribe(data =>{
      this.posts = data
    })
    this.http.getItem<CategoryCard[]>(`${environment.category.get}`).subscribe(data =>{
      this.category = data
    })
  }
}
