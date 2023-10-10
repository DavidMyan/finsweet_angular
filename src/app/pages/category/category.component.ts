import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AllPosts } from 'src/app/modues/glob_muduls';
import { AllPostsComponent } from '../blog/all-posts/all-posts.component';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';

@Component({
  standalone:true,
  imports:[
    AllPostsComponent,
    NgFor,
  ],
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  posts:AllPosts[] = []

  constructor(private http:HttpService){}
  ngOnInit(): void {
    this.http.getItem<AllPosts[]>(`${environment.posts.get}?_end=4`).subscribe(data => {
      this.posts = data
    })
  }

}
