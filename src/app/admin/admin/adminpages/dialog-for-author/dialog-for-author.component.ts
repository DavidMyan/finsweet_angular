import { NgIf, NgFor } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { UsersCard, CategoryCard, AllPosts } from 'src/app/modues/glob_muduls';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';

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
  selector: 'app-dialog-for-author',
  templateUrl: './dialog-for-author.component.html',
  styleUrls: ['./dialog-for-author.component.css']
})
export class DialogForAuthorComponent {
  imageValue!: string;
  titleValue!: string;
  categoryValue!: string;
  shortDescriptionValue!: string;
  selectedValue!: UsersCard ;
  authorName!:string;

  category: CategoryCard[] = [];
  authors: UsersCard[] = [];
  isDelete: boolean;
  action!: string;
  forum!: FormGroup;

  constructor(
    private http: HttpService,
    public dialogRef: MatDialogRef<DialogForAuthorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      isDelete: boolean,
      isAdd: boolean,
      action: string,
      postId?: number,
      postData: AllPosts
      authorName: string
    }) {

    this.isDelete = data.isDelete;
    this.action = data.action;

    this.authorName = data.authorName;
    this.imageValue = data.postData?.image || '';
    this.titleValue = data.postData?.title || '';
    this.shortDescriptionValue = data.postData?.short_description || '';

  }

  ngOnInit(): void {
    this.forum = new FormGroup({
      image: new FormControl(this.imageValue, [Validators.required]),
      category: new FormControl(this.categoryValue, [Validators.required]),
      title: new FormControl(this.titleValue, [Validators.required]),
      short_description: new FormControl(this.shortDescriptionValue, [Validators.required]),
    });

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
    const selectedCategoryr: CategoryCard = this.forum.get('category')?.value;
    
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const postDate = new Date();
    const formattedDate = `${months[postDate.getMonth()]} ${postDate.getDate()}, ${postDate.getFullYear()}`;
    
    const postData = {
      image: this.forum.get('image')?.value,
      postUser: this.authorName,
      category: selectedCategoryr.title,
      categoryImg: selectedCategoryr.image,
      title: this.forum.get('title')?.value,
      short_description: this.forum.get('short_description')?.value,
      postData: formattedDate
    };
    console.log(postDate);
    
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
