import { UsersCard } from 'src/app/modues/glob_muduls';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';
import { NgForOf } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
@Component({
  standalone:true,
  imports:[MatTableModule,NgForOf,MatIconModule],
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit{
  usersTableItem:UsersCard[] = [];

constructor(private http:HttpService){}
displayedColumns: string[] = ['id', 'Image' ,'Name', 'Speciality','Action'];
  ngOnInit(): void {
    this.getUsersInfo()
  }
  getUsersInfo(){
    this.http.getItem<UsersCard[]>(`${environment.usersInfo.get}`).subscribe(data =>{
      this.usersTableItem = data
      console.log(this.usersTableItem);
    })
  }
  deleteUsersInfo(deletId:number){
    this.http.deletItem(`${environment.usersInfo.get}`,deletId)
    this.getUsersInfo();
    }
  }
