import { NgIf, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Router } from '@angular/router';
import { AllPosts } from 'src/app/modues/glob_muduls';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';
import { DialogForAuthorComponent } from '../dialog-for-author/dialog-for-author.component';

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
  selector: 'app-author-posts',
  templateUrl: './author-posts.component.html',
  styleUrls: ['./author-posts.component.css']
})
export class AuthorPostsComponent {
  author!: any
  email: string | null = localStorage.getItem('email')
  authorName!: string
  authorPosts: AllPosts[] = []
  isDelete:boolean = false
  isAdd:boolean = false
  constructor(
    private http:HttpService,
    private router:Router,
    public dialog: MatDialog
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



openDeleteDialog(deletId: number): void {
  this.isDelete = true;
  this.isAdd = false;
  const dialogRef = this.dialog.open(DialogForAuthorComponent, {
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

openEditDialog(post: AllPosts,postId: number): void {
  this.isDelete = false;
  this.isAdd = false;
  const dialogRef = this.dialog.open(DialogForAuthorComponent, {
    width: '250px',
    data: {
      isDelete: this.isDelete,
      isAdd: this.isAdd,
      action: 'edit',
      postId: postId,
      postData: { ...post },
      authorName: this.authorName
    }
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result && result.data) {
      const updatedPostData = result.data;
      if (result.action === 'edit') {
        this.http.editItem<AllPosts>(`${environment.posts.edit}/${postId}`, updatedPostData).subscribe(() => {
          this.getAuthorPost();
        });
      }
    }
  });
}

}


