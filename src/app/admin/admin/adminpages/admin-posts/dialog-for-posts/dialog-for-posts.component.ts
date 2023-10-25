import { Component, Inject, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AllPosts, CategoryCard, UsersCard } from 'src/app/modues/glob_muduls';

import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';
import { MatSelectModule } from '@angular/material/select';
@Component({
  standalone:true,
  imports: [
              MatDialogModule,
              MatButtonModule,
              FormsModule,
              MatFormFieldModule,
              MatInputModule,
              NgIf,
              ReactiveFormsModule,
              NgFor,
              MatSelectModule,
            ],
  selector: 'app-dialog-for-posts',
  templateUrl: './dialog-for-posts.component.html',
  styleUrls: ['./dialog-for-posts.component.css']
})
export class DialogForPostsComponent implements OnInit {
  imageValue!: string;
  titleValue!: string;
  categoryValue!: string;
  shortDescriptionValue!: string;
  selectedValue: UsersCard | undefined;


  category: CategoryCard[] = [];
  authors: UsersCard[] = [];
  isDelete: boolean;
  action!: string;
  forum!: FormGroup;

  constructor(
    private http: HttpService,
    public dialogRef: MatDialogRef<DialogForPostsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      isDelete: boolean,
      isAdd: boolean,
      action: string,
      postId?: number,
      postData: AllPosts
    }) {

    this.isDelete = data.isDelete;
    this.action = data.action;

    this.imageValue = data.postData?.image || '';
    this.titleValue = data.postData?.title || '';
    this.shortDescriptionValue = data.postData?.short_description || '';

  }

  ngOnInit(): void {
    this.forum = new FormGroup({
      image: new FormControl(this.imageValue, [Validators.required]),
      postUser: new FormControl(this.selectedValue, [Validators.required]),
      category: new FormControl(this.categoryValue, [Validators.required]),
      title: new FormControl(this.titleValue, [Validators.required]),
      short_description: new FormControl(this.shortDescriptionValue, [Validators.required]),
    });

    if (this.data.postId) {
      this.http.getItem<AllPosts>(`${environment.posts.get}/${this.data.postId}`).subscribe(postData => {
          this.imageValue = postData.image || '';
          this.titleValue = postData.title || '';
          this.shortDescriptionValue = postData.short_description || '';
      });
    }

    this.getCategory();
    this.getAuthor();
    
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }

  send() {
    const selectedUser: UsersCard = this.forum.get('postUser')?.value;
    const selectedCategoryr: CategoryCard = this.forum.get('category')?.value;
    const postData = {
      image: this.forum.get('image')?.value,
      postUser: selectedUser.name,
      postUserImg: selectedUser.image,
      category: selectedCategoryr.title,
      categoryImg: selectedCategoryr.image,
      title: this.forum.get('title')?.value,
      short_description: this.forum.get('short_description')?.value
    };
    this.dialogRef.close({
      data: postData,
      action: this.action
    });
  }

  getCategory() {
    this.http.getItem<CategoryCard[]>(`${environment.category.get}`).subscribe(data => {
      this.category = data;
    });
  }

  getAuthor() {
    this.http.getItem<UsersCard[]>(`${environment.usersInfo.get}`).subscribe(data => {
      this.authors = data;
    });
  }
  getErrorMessage(controlName: string): string {
    const control = this.forum.get(controlName);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    return '';
  }
}

