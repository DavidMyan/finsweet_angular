import { NgIf, NgFor } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { DialogForPostsComponent } from 'src/app/admin/admin/adminpages/admin-posts/dialog-for-posts/dialog-for-posts.component';
import { AllPosts } from 'src/app/modues/glob_muduls';

@Component({
  standalone:true,
  imports:[
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    ReactiveFormsModule,
    NgFor,
    MatSelectModule,
    RouterModule,
    MatIconModule
  ],
  selector: 'app-dilaog-for-action',
  templateUrl: './dilaog-for-action.component.html',
  styleUrls: ['./dilaog-for-action.component.css']
})
export class DilaogForActionComponent{
  imageValue!: string;
  fullImageUrl: string = '';
  isDelete: boolean;
  requestMessage!: boolean
  constructor(
    public dialogRef: MatDialogRef<DialogForPostsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      fullImageUrl: string;
      isDelete: boolean,
      postData: AllPosts,
      requestMessage: boolean
    }) {

    this.isDelete = data.isDelete;
    this.imageValue = data.postData?.image || '';
    this.fullImageUrl = data.fullImageUrl;
    this.requestMessage = data.requestMessage
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }
  onYesClick(): void {
    this.dialogRef.close(true);
  }
  
}