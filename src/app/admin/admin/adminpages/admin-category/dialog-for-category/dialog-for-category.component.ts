import { Component, Inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CategoryCard } from 'src/app/modues/glob_muduls';
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
  selector: 'app-dialog-for-category',
  templateUrl: './dialog-for-category.component.html',
  styleUrls: ['./dialog-for-category.component.css']
})
export class DialogForCategoryComponent {
  
  isDelete: boolean;
  isAdd: boolean;
  action!: string;

  form!: FormGroup;

  titleValue!:string
  imageValue!:string
  shortDescriptionValue!:string

  constructor(
    public dialogRef: MatDialogRef<DialogForCategoryComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: {
      isDelete: boolean,
      isAdd: boolean,
      action: string,
      categoryData: CategoryCard
    }){
    this.isDelete = data.isDelete;
    this.isAdd = data.isAdd;
    this.action = data.action;
    
    this.titleValue = data.categoryData?.title || '';
    this.imageValue = data.categoryData?.image || '';
    this.shortDescriptionValue = data.categoryData?.short_description || '';
    
    this.form = new FormGroup({
      title: new FormControl(this.titleValue),
      image: new FormControl(this.imageValue),
      short_description: new FormControl(this.shortDescriptionValue),
    });
    
    this.form.get('title')?.setValidators([Validators.required]);
    this.form.get('image')?.setValidators([Validators.required]);
    this.form.get('short_description')?.setValidators([Validators.required]);
    
  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }

  getErrorMessage(controlName: string): string {
    const control = this.form.get(controlName);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    return '';
  }

  send() {
    this.dialogRef.close({ 
      data: this.form.value,
      action: this.action 
    });
  }
}
