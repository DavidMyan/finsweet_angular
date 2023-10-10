import { Component, OnInit } from '@angular/core';
import { JoinComponent } from '../home/join/join.component';
import { AllPosts } from 'src/app/modues/glob_muduls';
import { NgForOf } from '@angular/common';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';

@Component({
  standalone:true,
  imports:[JoinComponent,NgForOf],
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit{
  post: AllPosts[] = []
  constructor(private http:HttpService){}

  ngOnInit(): void {
    this.http.getItem<AllPosts[]>(`${environment.posts.get}?_end=3`).subscribe(data =>{
      this.post = data
    })
  }
}
