import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesCardComponent } from "./categories-card/categories-card.component";
import { UsersCardComponent } from "./users-card/users-card.component";
import { JoinComponent } from "./join/join.component";
import { NgForOf } from '@angular/common';
import { AllPosts, CategoryCard, UsersCard } from 'src/app/modues/glob_muduls';
import { OnInit } from '@angular/core';
import { AllPostsComponent } from '../blog/all-posts/all-posts.component';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';
@Component({
    standalone: true,
    imports: [
      RouterModule,
      CategoriesCardComponent,
      UsersCardComponent,
      JoinComponent,
      NgForOf,
      AllPostsComponent
    ],

    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  category: CategoryCard[] = [];
  usersInfo: UsersCard[] = [];
  posts: AllPosts[] = [];
  singlPost: AllPosts[] = [];

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.http.getItem<CategoryCard[]>(`${environment.category.get}`).subscribe((data) => {
      this.category = data;
    });
    this.http.getItem<UsersCard[]>(`${environment.usersInfo.get}?_start=0&_end=4`).subscribe((data) => {
      this.usersInfo = data;
    });
    this.http.getItem<AllPosts[]>(`${environment.posts.get}`).subscribe((data) => {
      this.posts = data;
    });
    this.http.getItem<AllPosts[]>(`${environment.posts.get}?_start=1&_end=2`).subscribe((data) => {
      this.singlPost = data;
    });
  }
}
