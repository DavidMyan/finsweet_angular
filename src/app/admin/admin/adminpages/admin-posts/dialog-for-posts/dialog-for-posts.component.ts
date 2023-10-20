import { Component, Inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AllPosts, CategoryCard } from 'src/app/modues/glob_muduls';

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
            ],
  selector: 'app-dialog-for-posts',
  templateUrl: './dialog-for-posts.component.html',
  styleUrls: ['./dialog-for-posts.component.css']
})
export class DialogForPostsComponent {
  isDelete: boolean;
  isAdd: boolean;
  action!: string;

  forum!: FormGroup;

  titleValue!:string
  imageValue!:string
  shortDescriptionValue!:string

  constructor(
    public dialogRef: MatDialogRef<DialogForPostsComponent>, 
    @Inject(MAT_DIALOG_DATA)public data: {
      isDelete: boolean,
      isAdd: boolean,
      action: string,
      postData: AllPosts
    }){
    this.isDelete = data.isDelete;
    this.isAdd = data.isAdd;
    this.action = data.action;
    
    this.imageValue = data.postData?.image || '';
    this.titleValue = data.postData?.title || '';
    this.shortDescriptionValue = data.postData?.short_description || '';
    
    this.forum = new FormGroup({
      image: new FormControl(this.imageValue),
      postUser:new FormControl(this.imageValue),
      category:new FormControl(this.imageValue),
      title: new FormControl(this.titleValue),
      short_description: new FormControl(this.shortDescriptionValue),
    });
    
    this.forum.get('title')?.setValidators([Validators.required]);
    this.forum.get('image')?.setValidators([Validators.required]);
    this.forum.get('short_description')?.setValidators([Validators.required]);
    
  }
  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }

  getErrorMessage(controlName: string): string {
    const control = this.forum.get(controlName);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    return '';
  }

  send() {
    this.dialogRef.close({ 
      data: this.forum.value,
      action: this.action 
    });
  }
}

