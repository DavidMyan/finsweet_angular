import { Component, OnInit } from '@angular/core';
import { UsersCardComponent } from '../home/users-card/users-card.component';
import { NgFor } from '@angular/common';
import { JoinComponent } from '../home/join/join.component';
import { UsersCard } from 'src/app/modues/glob_muduls';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';

@Component({
  standalone:true,
  imports:[
        UsersCardComponent,
        NgFor,
        JoinComponent
      ],
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{
  usersInfo: UsersCard[] = []

  constructor(private http:HttpService){}

  ngOnInit(): void {
    this.http.getItem<UsersCard[]>(`${environment.usersInfo.get}`).subscribe(data =>{
      this.usersInfo = data 
    })
  }
  
}
