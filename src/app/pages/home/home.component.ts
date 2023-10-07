import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesCardComponent } from "./categories-card/categories-card.component";
import { UsersCardComponent } from "./users-card/users-card.component";
import { JoinComponent } from "./join/join.component";
import { NgForOf } from '@angular/common';
import { CategoryCard, UsersCard } from 'src/app/modues/glob_muduls';
import { DataService } from 'src/app/http.service';
import { OnInit } from '@angular/core';
@Component({
    standalone: true,
    imports: [
      RouterModule,
      CategoriesCardComponent,
      UsersCardComponent,
      JoinComponent,
      NgForOf
    ],

    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  category: CategoryCard[] = [];
  usersInfo: UsersCard[] = [];
  limitCategory = 4;
  limitUsers = 4;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getCategory(this.limitCategory).subscribe(data => {
      this.category = data;
    });

    this.dataService.getUsersInfo(this.limitUsers).subscribe(data => {
      this.usersInfo = data;
    });
  }
}
