import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesCardComponent } from "./categories-card/categories-card.component";
import { UsersCardComponent } from "./users-card/users-card.component";
import { JoinComponent } from "./join/join.component";
import { NgForOf } from '@angular/common';
import { CategoryCard, UsersCard } from 'src/app/modues/glob_muduls';

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
export class HomeComponent {
  category:CategoryCard[] = [
    {
      id:1,
      image:'assets/img/home_main/icon_1.png',
      title:'Business',
      short_description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      id:2,
      image:'assets/img/home_main/icon_2.png',
      title:'Startup',
      short_description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      id:3,
      image:'assets/img/home_main/icon_3.png',
      title:'Economy',
      short_description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    },
    {
      id:4,
      image:'assets/img/home_main/icon_4.png',
      title:'Technology',
      short_description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'
    }
  ]
  usersInfo: UsersCard[] = [
    {
      id: 1,
      image: 'assets/img/home_main/section_user_1.png',
      name: 'Floyd Miles',
      short_description: 'Content Writer @Company',
      facebook: "assets/img/footer/facebook.png",
      twiter: "assets/img/footer/twiter.png",
      instagram: "assets/img/footer/instagram.png",
      in: "assets/img/footer/in.png",
    },
    {
      id: 2,
      image: 'assets/img/home_main/section_user_2.png',
      name: 'Dianne Russell',
      short_description: 'Content Writer @Company',
      facebook: "assets/img/footer/facebook.png",
      twiter: "assets/img/footer/twiter.png",
      instagram: "assets/img/footer/instagram.png",
      in: "assets/img/footer/in.png",
    },
    {
      id: 3,
      image: 'assets/img/home_main/section_user_3.png',
      name: 'Jenny Wilson',
      short_description: 'Content Writer @Company',
      facebook: "assets/img/footer/facebook.png",
      twiter: "assets/img/footer/twiter.png",
      instagram: "assets/img/footer/instagram.png",
      in: "assets/img/footer/in.png",
    },
    {
      id: 4,
      image: 'assets/img/home_main/section_user_4.png',
      name: 'Leslie Alexander',
      short_description: 'Content Writer @Company',
      facebook: "assets/img/footer/facebook.png",
      twiter: "assets/img/footer/twiter.png",
      instagram: "assets/img/footer/instagram.png",
      in: "assets/img/footer/in.png",
    }
  ]
}
