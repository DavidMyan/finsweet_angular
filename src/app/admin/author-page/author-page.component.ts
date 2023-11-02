import { NgForOf, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterModule } from '@angular/router';
import { AllPosts } from 'src/app/modues/glob_muduls';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  standalone:true,
  imports: [
    MatSidenavModule,
    NgIf,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    NgForOf,
    MatMenuModule,
    RouterModule
  ],
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css']
})
export class AuthorPageComponent implements OnInit{
  author!: any
  email: string | null = localStorage.getItem('email')
  authorName!: string
  authorPosts: AllPosts[] = []


  constructor(
      private http:HttpService,
      private router:Router,
    ){}

  ngOnInit(): void {
    this.getAuthor()
  }
  getAuthor(){
    this.http.getItem<any>(`${environment.author.get}?email=${this.email}`).subscribe(date =>{
      this.author = date[0];
      this.authorName =  this.author.name;
      this.getAuthorPost()
    });
  }
  getAuthorPost(){
    this.http.getItem<AllPosts[]>(`${environment.posts.get}?postUser=${this.authorName}` ).subscribe(date =>{
      this.authorPosts = date      
    })
  }
  deletePost(deletId: number) {
    this.http.deletItem(`${environment.posts.delete}/${deletId}`).subscribe(() => {
      this.getAuthorPost();
    });
  }
  remuveToken(){
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('email')
    this.router.navigate(['admin/login'])
  }
}
 