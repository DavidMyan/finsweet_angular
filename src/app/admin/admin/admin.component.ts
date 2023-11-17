import { AllPosts, Message } from './../../modues/glob_muduls';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';
import { NgIf } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  standalone:true,
  imports:[
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    NgIf,
    MatMenuModule,

  ],
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  message: Message[] = []
  regMessage: any[] = []
  messageCount: number = 0;
  role:string | null = localStorage.getItem('role')

  author!: any
  email: string | null = localStorage.getItem('email')
  authorName!: string
  authorPosts: AllPosts[] = []

  constructor(private router:Router, private http:HttpService){}

  ngOnInit(): void {
    this.getMessage()
    this.getAuthor()
  }
  getAuthor(){
    this.http.getItem<any>(`${environment.usersInfo.get}?email=${this.email}`).subscribe(date =>{
      this.author = date[0];
      this.authorName =  this.author.name;
    });
  }
  remuveToken(){
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('email')
    this.router.navigate(['admin/login'])
  }

  getMessage(){
    this.http.getItem<Message[]>(environment.comments.get).subscribe(data => {
      this.message = data;
      this.updateMessageCount(); 
    });

    this.http.getItem<any[]>(environment.regRequest.get).subscribe(data => {
      this.regMessage = data;
      this.updateMessageCount(); 
    });
  }
  updateMessageCount() {
    this.messageCount = this.message.length + this.regMessage.length; 
  }

}
