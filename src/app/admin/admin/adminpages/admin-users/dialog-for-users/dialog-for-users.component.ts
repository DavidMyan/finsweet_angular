import { NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsersCard } from 'src/app/modues/glob_muduls';

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
  selector: 'app-dialog-for-users',
  templateUrl: './dialog-for-users.component.html',
  styleUrls: ['./dialog-for-users.component.css']
})

export class DialogForUsersComponent {
  isDelete: boolean;
  isAdd: boolean;
  action!: string;
  form!: FormGroup;

  nameValue!:string
  imageValue!:string
  shortDescriptionValue!:string

  constructor(
    public dialogRef: MatDialogRef<DialogForUsersComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: {

      isDelete: boolean,
      isAdd: boolean,
      action: string,
      userData: UsersCard,
      
    }){
    
    this.isDelete = data.isDelete;
    this.isAdd = data.isAdd;
    this.action = data.action;
    
    this.nameValue = data.userData?.name;
    this.imageValue = data.userData?.image;
    this.shortDescriptionValue = data.userData?.short_description;
    
    this.form = new FormGroup({
      name: new FormControl(this.nameValue),
      image: new FormControl(this.imageValue),
      short_description: new FormControl(this.shortDescriptionValue),

    });
    
    this.form.get('name')?.setValidators([Validators.required]);
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
