import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { AllPosts } from 'src/app/modues/glob_muduls';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';
import { DialogForPostsComponent } from './dialog-for-posts/dialog-for-posts.component';

@Component({
  standalone: true,
  imports: [MatIconModule, MatTableModule],
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})
export class AdminPostsComponent implements OnInit {
  postTableItem: AllPosts[] = [];
  displayedColumns: string[] = ['id', 'Image', 'postusername', 'categoryname', 'title', 'description', 'Action'];
  isDelete:boolean = false
  isAdd:boolean = false
  constructor(private http:HttpService,public dialog: MatDialog){}

  openDeleteDialog(deletId: number): void {
    this.isDelete = true;
    this.isAdd = false;
    const dialogRef = this.dialog.open(DialogForPostsComponent, {
      width: '250px',
      data: { 
        isDelete: this.isDelete,
        isAdd: this.isAdd,
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.isDelete = false;
      if (result) {
        this.deletePost(deletId);
      }
    });
  }
  
  openEditDialog(category: AllPosts,categoryId:number): void {
    this.isDelete = false;
    this.isAdd = false;
    const dialogRef = this.dialog.open(DialogForPostsComponent, {
      width: '250px',
      data: {
        isDelete: this.isDelete,
        isAdd: this.isAdd,
        action: 'edit',
        categoryData: { ...category } 
      }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.data) {
        const updatedCategoryData = result.data;
        if (result.action === 'edit') {
          dialogRef.componentInstance.forum.patchValue({
            title: updatedCategoryData.title,
            image: updatedCategoryData.image,
            short_description: updatedCategoryData.short_description
          });
          this.http.editItem<AllPosts>(`${environment.category.edit}/${categoryId}`, updatedCategoryData).subscribe(() => {
            this.getPost();
          });
        } else if (result.action === 'add') {
          this.http.addItem<AllPosts>(`${environment.category.post}`, updatedCategoryData).subscribe(() => {
            this.getPost();
          });
        }
      }
      
    });
  }
  
  openAddDialog(): void {
    this.isDelete = false;
    this.isAdd = true;
    const dialogRef = this.dialog.open(DialogForPostsComponent, {
      width: '250px',
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

  ngOnInit(): void {
    this.getPost();
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