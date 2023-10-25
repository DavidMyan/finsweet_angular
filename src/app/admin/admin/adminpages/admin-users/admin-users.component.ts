import { UsersCard } from 'src/app/modues/glob_muduls';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogForUsersComponent } from './dialog-for-users/dialog-for-users.component';
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

  constructor(private http:HttpService, public dialog: MatDialog){}

  openDeleteDialog(deletId: number): void {
    this.isDelete = true;
    this.isAdd = false;
    const dialogRef = this.dialog.open(DialogForUsersComponent, {
      width: '250px',
      data: { 
        isDelete: this.isDelete,
        isAdd: this.isAdd,
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.isDelete = false;
      if (result) {
        this.deleteUsersInfo(deletId);
      }
    });
  }
  
  openEditDialog(user: UsersCard ,userId:number): void {
    this.isDelete = false;
    this.isAdd = false;
    const dialogRef = this.dialog.open(DialogForUsersComponent, {
      width: '250px',
      data: {
        isDelete: this.isDelete,
        isAdd: this.isAdd,
        action: 'edit',
        userData: { ...user }
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.data) {
        const updatedUserData = result.data
        
        if (result.action === 'edit') {
          dialogRef.componentInstance.form.patchValue({
            name: updatedUserData.name,
            imag: updatedUserData.image,
            short_descriptio: updatedUserData.short_description
          });
          this.http.editItem<UsersCard>(`${environment.usersInfo.edit}/${userId}`, updatedUserData).subscribe(() => {
            this.getUsersInfo();
          });
        }else if (result.action === 'add') {
          this.http.addItem<UsersCard>(`${environment.usersInfo.post}`, updatedUserData).subscribe(() => {
            this.getUsersInfo();
          });
        }
      }
      
    });
  }
  
  openAddDialog(): void {
    this.isDelete = false;
    this.isAdd = true;
    const dialogRef = this.dialog.open(DialogForUsersComponent, {
      width: '250px',
      data: { 
        isDelete: this.isDelete,
        isAdd: this.isAdd,
        action: 'add'
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.data) {
        const newUserData = result.data;
        if (result.action === 'add') {
          this.http.addItem<UsersCard>(`${environment.usersInfo.post}`, newUserData).subscribe(() => {
            this.getUsersInfo();
          });
        }
      }
    });
  }

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