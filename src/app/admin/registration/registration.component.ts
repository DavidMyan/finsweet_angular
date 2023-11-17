import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { DilaogForActionComponent } from 'src/app/dialogs/dilaog-for-action/dilaog-for-action.component';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';

@Component({
  standalone:true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    RouterModule,
    MatIconModule,
  ],

  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent{

  errorMessage: string = '';
  requestMessage!:boolean;

  constructor(private http:HttpService, public dialog: MatDialog) {}

  firstFormGroup:FormGroup = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    password : new FormControl('', [Validators.required, Validators.minLength(4)]),
    f_name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern(/^[A-Z][a-z]*$/)]),
    l_name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.pattern(/^[A-Z][a-z]*$/)]),
    image: new FormControl('',Validators.required),
    short_description: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  regNewUser(){
    const newUserReg = {
      email: this.firstFormGroup.get('email')?.value,
      name:`${this.firstFormGroup.get('f_name')?.value} ${this.firstFormGroup.get('l_name')?.value}`,
      image: this.firstFormGroup.get('image')?.value,
      short_description: this.firstFormGroup.get('short_description')?.value,
      noFoto: "assets/img/authors_imgs/defolt_avatar.png",
      role: 'author',
      facebook: "assets/img/footer/facebook.png",
      twiter: "assets/img/footer/twiter.png",
      instagram: "assets/img/footer/instagram.png",
      in: "assets/img/footer/in.png"
    }
    this.http.addItem<any>(`${environment.regRequest.get}`,newUserReg).subscribe()
  }
  newRegLog(){
    const newRegLog = {
      email: this.firstFormGroup.get('email')?.value,
      password: this.firstFormGroup.get('password')?.value,
      role: "author",
    }
    this.http.addItem<any>(`${environment.author.get}`,newRegLog).subscribe(()=>{
      this.regNewUser()
      this.messageDialog()
      this.firstFormGroup.reset()
    },
    (error) => {
      if (error.status === 400) {
        this.errorMessage = 'User with this email already exists.';
      } else {
        this.errorMessage = 'Error during registration. Please try again later.';
      }
    })
  }

  getErrorMessage(formControl: AbstractControl) {
    if (formControl.hasError('required')) {
      return 'You must enter a value';
    } else if (formControl.hasError('email')) {
      return 'Not a valid email example (test@mail.ru)';
    } else if (formControl.hasError('pattern')) {
      return 'Invalid email format example(test@mail.ru)';
    }
    return '';
  }
  getPasswordErrorMessage(formControl: AbstractControl) {
    if (formControl.hasError('required')) {
      return 'You must enter a password';
    } else if (formControl.hasError('minlength')) {
      return 'Password must be at least 4 characters long';
    }
    return '';
  }
  messageDialog(): void {
     this.dialog.open(DilaogForActionComponent, {
      data: {
        isDelete: false,
        requestMessage: true,
      }
    });

  }
}