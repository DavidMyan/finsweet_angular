import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';
import { DialogforregistationComponent } from './dialogforregistation/dialogforregistation.component';

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
    MatIconModule
  ],

  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit{
  firstFormGroup!: FormGroup
  sendForum!:boolean
  constructor(private http:HttpService, public dialog: MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogforregistationComponent, {
      width: '400px',
      data: { sendForum: this.sendForum }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.sendForum = result;
      if (this.sendForum) {
        this.sendInfo()
        this.firstFormGroup.reset()
      }
    });
  }


  ngOnInit(): void {
    this.firstFormGroup = new FormGroup({
      email : new FormControl('', [Validators.required, Validators.email]),
      password : new FormControl('', [Validators.required, Validators.minLength(3)]),
      f_name: new FormControl('', [Validators.required,Validators.minLength(3)]),
      l_name: new FormControl('', [Validators.required,Validators.minLength(3)]),
      image: new FormControl('', [Validators.required,Validators.minLength(6)]),
      short_description: new FormControl('', [Validators.required,Validators.minLength(6)]),
      description: new FormControl('', [Validators.required,Validators.minLength(6)]),
    });
  }
  sendInfo(){
      const newReg =  this.firstFormGroup.value
      this.http.addItem<any>(`${environment.regRequest.get}`,newReg).subscribe(() =>{
    })
  }
  getErrorMessage(formControl: AbstractControl) {
    if (formControl.hasError('required')) {
      return 'You must enter a value';
    }
    return formControl.hasError('email') ? 'Not a valid email' : '';
  }
  
}
