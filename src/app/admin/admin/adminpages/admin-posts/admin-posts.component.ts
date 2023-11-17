import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AllPosts } from 'src/app/modues/glob_muduls';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';
import { DialogForPostsComponent } from './dialog-for-posts/dialog-for-posts.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import { DialogForUsersComponent } from '../admin-users/dialog-for-users/dialog-for-users.component';
import { DilaogForActionComponent } from 'src/app/dialogs/dilaog-for-action/dilaog-for-action.component';

@Component({
  standalone: true,
  imports: [
    MatIconModule,
    MatTableModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})
export class AdminPostsComponent implements OnInit {
  postTableItem: AllPosts[] = [];
  displayedColumns: string[] = ['id', 'Image', 'postusername', 'categoryname', 'title', 'description','date', 'Action'];
  isDelete:boolean = false
  isAdd:boolean = false
  constructor(private http:HttpService,public dialog: MatDialog){}

  ngOnInit(): void {
    this.getPost();
  }

  openEditDialog(post: AllPosts,postId: number): void {
    this.isDelete = false;
    this.isAdd = false;
    const dialogRef = this.dialog.open(DialogForPostsComponent, {
      data: {
        isAdd: this.isAdd,
        action: 'edit',
        postId: postId, 
        postData: { ...post } 
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.data) {
        const updatedPostData = result.data;
        if (result.action === 'edit') {
          this.http.editItem<AllPosts>(`${environment.posts.edit}/${postId}`, updatedPostData).subscribe(() => {
            this.getPost();
          });
        }
      }
    });
  }
  
  openAddDialog(): void {
    this.isAdd = true;
    const dialogRef = this.dialog.open(DialogForPostsComponent, {
      data: { 
        isDelete: this.isDelete,
        isAdd: this.isAdd,
        action: 'add'
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.data) {
        const newCategoryData = result.data;
        if (result.action === 'add') {
          this.http.addItem<AllPosts>(`${environment.posts.post}`, newCategoryData).subscribe(() => {
            this.getPost();
          });
        }
      }
    });
  }
  openImageDialog(imageUrl: string): void {
    this.dialog.open(DilaogForActionComponent, {
     data: {
       fullImageUrl: imageUrl 
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

  dialogRef.afterClosed().subscribe(result => {
    this.isDelete = false;
    if (result) {
      this.deletePost(deletId);
    }
  });
}

  getPost() {
    this.http.getItem<AllPosts[]>(`${environment.posts.get}`).subscribe(data => {
      this.postTableItem = data;
    });
  }

  deletePost(deletId: number) {
    this.http.deletItem(`${environment.posts.delete}/${deletId}`).subscribe(() => {
      this.getPost();
    });
  }
}