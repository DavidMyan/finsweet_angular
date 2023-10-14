import { Component, OnInit } from '@angular/core';
import { AllPosts, UsersCard } from 'src/app/modues/glob_muduls';
import { SingleAuthorComponent } from './single-author/single-author.component';
import { NgFor } from '@angular/common';
import { AllPostsComponent } from '../blog/all-posts/all-posts.component';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';
import { ActivatedRoute } from '@angular/router'; 

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
  userId!: number;
  user!: UsersCard;
  constructor(private route: ActivatedRoute, private http: HttpService) {}
  ngOnInit(): void {
    this.route.params.subscribe(getID => {
      this.userId = getID['id'];
      this.http.getItem<UsersCard>(`${environment.usersInfo.get}/${this.userId}`).subscribe(data => {
        this.user = data;
      });
    });
  }
}
