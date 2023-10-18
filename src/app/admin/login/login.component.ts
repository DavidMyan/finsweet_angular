import {Component} from '@angular/core';
import {FormControl, Validators,FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatButtonModule} from '@angular/material/button';
import { NgIf} from '@angular/common';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { HttpService } from 'src/app/service/http.service';
import { Router } from '@angular/router';
import { environment } from 'src/environment/environment';


@Component({
  standalone:true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, NgIf,MatButtonModule, MatDividerModule, MatIconModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  emailFormControl = new FormControl('', Validators.email);
  password = new FormControl('', [Validators.required]);
  constructor(private http:HttpService,private router:Router){}
  save(){
    let logReg = {
      email: this.emailFormControl.value,
      password: this.password.value,
    }
    this.http.postItem<any>(`${environment.loginReg.get}`,logReg).subscribe(data =>{
      console.log(data);
      localStorage.setItem('userData',JSON.stringify(data.user))
      localStorage.setItem('token',JSON.stringify(data.accessToken))
      this.router.navigate(['/admin'])
    })
  }
}
