import { Component, OnInit } from '@angular/core';
import { AllPosts, UsersCard } from 'src/app/modues/glob_muduls';
import { SingleAuthorComponent } from './single-author/single-author.component';
import { NgFor, NgIf } from '@angular/common';
import { AllPostsComponent } from '../blog/all-posts/all-posts.component';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  standalone:true,
  imports:[
    SingleAuthorComponent,
    NgFor,
    AllPostsComponent,
    NgIf
  ],
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  user!: UsersCard[];
  authorName!: string;
  posts:AllPosts[]=[]
  constructor(private route: ActivatedRoute, private http: HttpService) {}

  ngOnInit(): void {
    this.getSingleUser();
    this.getSingleAutorPosts();
  }
  getSingleUser(){
    this.route.params.subscribe(params => {
      this.authorName = params['name'];
      this.http.getItem<UsersCard[]>(`${environment.usersInfo.get}?name=${this.authorName}`).subscribe(data => {
        this.user = data;
      });
    });
  }
  getSingleAutorPosts() {
    this.http.getItem<AllPosts[]>(`${environment.posts.get}?postUser=${this.authorName}`).subscribe(data => {
        this.posts = data;
        console.log(`${environment.posts.get}?postUser=${this.authorName}`);
    });
  }
}