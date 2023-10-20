import { UsersCard } from 'src/app/modues/glob_muduls';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
@Component({
  standalone:true,
  imports:[MatTableModule,MatIconModule],
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit{
  usersTableItem:UsersCard[] = [];

  isDelete:boolean = false
  isAdd:boolean = false
  displayedColumns: string[] = ['id', 'Image' ,'Name', 'Speciality','Action'];

  constructor(
      private http:HttpService,
      public dialog: MatDialog){
        
      }

  // openDialog(deletId: number): void {
  //   this.isDelete = true;
  //   this.isAdd = false;
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     width: '250px',
  //     data: { 
  //       isDelete: this.isDelete,
  //       isAdd: this.isAdd,
  //     }
  //   });
  
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.isDelete = false;
  //     if (result) {
  //       this.deleteUsersInfo(deletId);
  //     }
  //   });
  // }
  
  // openAddDialog(): void {
  //   this.isAdd = true;
  //   this.isDelete = false;
  //   const dialogRef = this.dialog.open(DialogComponent, {
  //     width: '250px',
  //     data: { 
  //       isDelete: this.isDelete,
  //       isAdd: this.isAdd,
  //     }
  //   });
  
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.isAdd = false;
  //   });
  // }

  ngOnInit(): void {
    this.getUsersInfo()
  }

  getUsersInfo(){
    this.http.getItem<UsersCard[]>(`${environment.usersInfo.get}`).subscribe(data =>{
      this.usersTableItem = data
    })
  }

  deleteUsersInfo(deletId:number){
    this.http.deletItem(`${environment.usersInfo.get}/${deletId}`).subscribe(()=>{
      this.getUsersInfo();
    })
  }

}