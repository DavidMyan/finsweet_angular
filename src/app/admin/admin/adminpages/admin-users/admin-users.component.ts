import { UsersCard } from 'src/app/modues/glob_muduls';
import { Component,OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogForUsersComponent } from './dialog-for-users/dialog-for-users.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgIf } from '@angular/common';
import { DilaogForActionComponent } from 'src/app/dialogs/dilaog-for-action/dilaog-for-action.component';

@Component({
  standalone:true,
  imports:[
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    NgIf
  ],
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit{

  usersTableItem:UsersCard[] = [];
  fullImageUrl: string = '';
  isDelete:boolean = false
  isAdd:boolean = false
  displayedColumns: string[] = ['id', 'Image' ,'Name', 'Speciality','Action'];

  constructor(private http:HttpService, public dialog: MatDialog){}

  ngOnInit(): void {
    this.getUsersInfo()
  }
  
  openEditDialog(user: UsersCard ,userId:number): void {
    this.isAdd = false;
    const dialogRef = this.dialog.open(DialogForUsersComponent, {
      data: {
        isAdd: this.isAdd,
        action: 'edit',
        userData: { ...user }
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
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
        }
    });
  }
  
  openAddDialog(): void {
    this.isAdd = true;
    const dialogRef = this.dialog.open(DialogForUsersComponent, {
      data: { 
        isAdd: this.isAdd,
        action: 'add'
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      const newUserData = result.data;
      if (result.action === 'add') {
        this.http.addItem<UsersCard>(`${environment.usersInfo.post}`, newUserData).subscribe(() => {
          this.getUsersInfo();
        });
      }
    });
  }

  openDeleteDialog(deletId: number): void {
    this.isDelete = true;
    const dialogRef = this.dialog.open(DilaogForActionComponent, {
      data: { 
        isDelete: this.isDelete,
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.isDelete = false;
      this.deleteUsersInfo(deletId);
    });
  }
  
  openImageDialog(imageUrl: string): void {
    this.dialog.open(DilaogForActionComponent, {
        data: {
          isDelete: false,
          fullImageUrl: imageUrl
        }
    });
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