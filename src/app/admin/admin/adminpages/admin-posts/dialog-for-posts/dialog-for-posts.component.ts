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
  selectedValue!: UsersCard ;


  category: CategoryCard[] = [];
  authors: UsersCard[] = [];
  action!: string;
  form!: FormGroup;

  constructor(
    private http: HttpService,
    public dialogRef: MatDialogRef<DialogForPostsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {

      isAdd: boolean,
      action: string,
      postId?: number,
      postData: AllPosts

    }) {

    this.action = data.action;

    this.imageValue = data.postData?.image || '';
    this.titleValue = data.postData?.title || '';
    this.shortDescriptionValue = data.postData?.short_description || '';

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      image: new FormControl(this.imageValue, [Validators.required]),
      postUser: new FormControl(this.selectedValue, [Validators.required]),
      category: new FormControl(this.categoryValue, [Validators.required]),
      title: new FormControl(this.titleValue, [Validators.required]),
      short_description: new FormControl(this.shortDescriptionValue, [Validators.required]),
    });

    this.getCategory();
    this.getAuthor();
  }

  send() {
    const selectedUser: UsersCard = this.form.get('postUser')?.value;
    const selectedCategoryr: CategoryCard = this.form.get('category')?.value;
    
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const postDate = new Date();
    const formattedDate = `${months[postDate.getMonth()]} ${postDate.getDate()}, ${postDate.getFullYear()}`;
    
    const postData = {
      image: this.form.get('image')?.value,
      postUser: selectedUser.name,
      postUserImg: selectedUser.image,
      category: selectedCategoryr.title,
      categoryImg: selectedCategoryr.image,
      title: this.form.get('title')?.value,
      short_description: this.form.get('short_description')?.value,
      noFoto: "assets/img/post_imgs/defolt_foto.png",
      postData: formattedDate
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
    const control = this.form.get(controlName);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    return '';
  }
}

