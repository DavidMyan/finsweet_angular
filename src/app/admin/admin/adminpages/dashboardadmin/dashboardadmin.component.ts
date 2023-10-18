import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone:true,
  imports: [MatCardModule,MatIconModule ],
  selector: 'app-dashboardadmin',
  templateUrl: './dashboardadmin.component.html',
  styleUrls: ['./dashboardadmin.component.css'],
})
export class DashboardadminComponent implements OnInit{
  usersCount:number[] = []
  postCount:number[] = []
  categoryCount:number[] = []
constructor(private http: HttpService){}
  ngOnInit(): void {
    this.http.getItem<number[]>(`${environment.usersInfo.get}`).subscribe(data =>{
      this.usersCount = data
    })
    this.http.getItem<number[]>(`${environment.category.get}`).subscribe(data =>{
      this.categoryCount = data
    })
    this.http.getItem<number[]>(`${environment.posts.get}`).subscribe(data =>{
      this.postCount = data
    })
  }
  
}
