import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup,  FormsModule,  ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';

@Component({
  standalone:true,
  imports: [
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    NgIf,
    NgFor
  ],
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit{

  firstFormGroup!: FormGroup
  secondFormGroup!: FormGroup
  constructor(private http:HttpService) {}

  ngOnInit(): void {
    this.firstFormGroup = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(4)]),
    });

    this.secondFormGroup = new FormGroup({
      f_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      l_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      image: new FormControl('',[ Validators.required, Validators.minLength(6)]),
      short_description: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  regNewUser(){
    const newUserReg = {
      email: this.firstFormGroup.get('email')?.value,
      password: this.firstFormGroup.get('password')?.value,
      name:`${this.secondFormGroup.get('f_name')?.value} ${this.secondFormGroup.get('l_name')?.value}`,
      image: this.secondFormGroup.get('image')?.value,
      short_description: this.secondFormGroup.get('short_description')?.value,
      role: 'author',
      facebook: "assets/img/footer/facebook.png",
      twiter: "assets/img/footer/twiter.png",
      instagram: "assets/img/footer/instagram.png",
      in: "assets/img/footer/in.png"
    }
    this.http.addItem<any>(`${environment.register.get}`,newUserReg).subscribe()
  }

  sendNewUser(){
    this.regNewUser()
  }

  getErrorMessage(formControl: AbstractControl) {
    if (formControl.hasError('required')) {
      return 'You must enter a value';
    }
  
    return formControl.hasError('email') ? 'Not a valid email' : '';
  }
}