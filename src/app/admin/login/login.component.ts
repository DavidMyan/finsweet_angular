import { Login } from './../../modues/glob_muduls';
import { Component } from '@angular/core';
import { FormControl,FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatButtonModule} from '@angular/material/button';
import { NgIf} from '@angular/common';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { HttpService } from 'src/app/service/http.service';
import { Router, RouterModule } from '@angular/router';
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
    RouterModule
  ],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  emailFormControl = new FormControl('');
  password = new FormControl('');
  user:any = []
  logReg!: Login;
  errorMessage: string = '';
  constructor(private http: HttpService, private router: Router) {}

  onEmailInput() {
    const email = this.emailFormControl.value;

    this.http.getItem<string[]>(`http://localhost:3000/users?email=${email}`).subscribe(data => {
      this.user = data;
    });
  }

  save() {
    this.logReg = {
      email: this.emailFormControl.value,
      password: this.password.value,
      accessToken: ''
    };

    this.http.addItem<Login>(`${environment.loginReg.get}`, this.logReg).subscribe(data => {

      localStorage.setItem('token', JSON.stringify(data.accessToken));
      localStorage.setItem('email', this.user[0].email);
      localStorage.setItem('role', this.user[0].role);

      if (this.user[0].role == 'admin' || this.user[0].role == 'author') {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/admin/login']);
      }
  },() => {
    this.errorMessage = 'Invalid login credentials. Please try again.'
  });
  }

}