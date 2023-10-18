import { Component, OnInit } from '@angular/core';
import { JoinComponent } from '../home/join/join.component';
import { AllPosts, UsersCard } from 'src/app/modues/glob_muduls';
import { NgForOf, NgIf } from '@angular/common';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';
import { ActivatedRoute, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  standalone:true,
  imports:[JoinComponent,NgForOf,NgIf,RouterLinkActive,RouterModule],
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit{
  post: AllPosts[] = []
  correctPost!: AllPosts
  correctid!: string
  usersInfo!: UsersCard;
  constructor(private http:HttpService,private correctID:ActivatedRoute){}

  ngOnInit(): void {
    this.http.getItem<AllPosts[]>(`${environment.posts.get}?_end=3`).subscribe(data =>{
      this.post = data
    })
    this.correctID.params.subscribe(selsetId =>{
      this.correctid = selsetId['id']
      this.http.getItem<AllPosts>(`${environment.posts.get}/${this.correctid}`).subscribe(data =>{
        this.correctPost = data
        console.log(this.correctid);
      })
    })
    this.http.getItem<UsersCard>(`${environment.usersInfo.get}`).subscribe((data) => {
      this.usersInfo = data;
      console.log(this.usersInfo);
      
    });
  }
}
