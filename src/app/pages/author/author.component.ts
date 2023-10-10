import { Component, OnInit } from '@angular/core';
import { AllPosts, SingleAuthor } from 'src/app/modues/glob_muduls';
import { SingleAuthorComponent } from './single-author/single-author.component';
import { NgFor } from '@angular/common';
import { AllPostsComponent } from '../blog/all-posts/all-posts.component';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';

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
export class AuthorComponent implements OnInit{
  posts:AllPosts[] = [];
  singleAuthor:SingleAuthor[] = [];

  constructor(private http:HttpService){}

  ngOnInit(): void {
    this.http.getItem<AllPosts[]>(`${environment.posts.get}?_end=2`).subscribe(data =>{
      this.posts = data
    })
    this.http.getItem<SingleAuthor[] >(`${environment.singleAuthor.get}?_end=1`).subscribe(data =>{
      this.singleAuthor = data
    })
  }


}
