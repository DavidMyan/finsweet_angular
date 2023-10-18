import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  standalone:true,
  imports:[RouterModule,MatToolbarModule,MatSidenavModule,MatButtonModule,MatIconModule],
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private router:Router){}
  protected readonly window:Window = window;
  remuveToken(){
    localStorage.removeItem('token')
    this.router.navigate(['admin/login'])
  }
}
