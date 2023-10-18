import { Component, OnInit } from '@angular/core';
import { AllPosts, CategoryCard } from 'src/app/modues/glob_muduls';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { NgFor, NgIf } from '@angular/common';
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
        CategoriesCardComponent,
        NgIf
    ]
})
export class BlogComponent implements OnInit{
  posts:AllPosts[] = []
  category: CategoryCard[] = [];
  currentPage: number = 1;
  constructor(private http: HttpService) {}

  ngOnInit(): void {
      this.loadPosts();
      this.http.getItem<CategoryCard[]>(`${environment.category.get}`).subscribe(data => {
        this.category = data;
    });
  }

  loadPosts() {
      this.http.getItem<AllPosts[]>(`${environment.posts.get}?_page=${this.currentPage}&_limit=4`).subscribe(data => {
          this.posts = data;
      });
  }

  nextPage() {
      this.currentPage++;
      this.loadPosts();
  }

  prevPage() {
      if (this.currentPage > 1) {
          this.currentPage--;
          this.loadPosts();
      }
  }
}
