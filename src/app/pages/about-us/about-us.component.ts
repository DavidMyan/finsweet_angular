import { Component } from '@angular/core';
import { UsersCardComponent } from '../home/users-card/users-card.component';
import { NgFor } from '@angular/common';
import { JoinComponent } from '../home/join/join.component';
import { UsersCard } from 'src/app/modues/glob_muduls';

@Component({
  standalone:true,
  imports:[
        UsersCardComponent,
        NgFor,
        JoinComponent
      ],
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
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
    },
    {
      id: 5,
      image: 'assets/img/about_us/section_5_img_user_1.png',
      name: 'Leslie Alexander',
      short_description: 'Content Writer @Company',
      facebook: "assets/img/footer/facebook.png",
      twiter: "assets/img/footer/twiter.png",
      instagram: "assets/img/footer/instagram.png",
      in: "assets/img/footer/in.png",
    },
    {
      id: 6,
      image: 'assets/img/about_us/section_5_img_user_2.png',
      name: 'Leslie Alexander',
      short_description: 'Content Writer @Company',
      facebook: "assets/img/footer/facebook.png",
      twiter: "assets/img/footer/twiter.png",
      instagram: "assets/img/footer/instagram.png",
      in: "assets/img/footer/in.png",
    },
    {
      id: 7,
      image: 'assets/img/about_us/section_5_img_user_3.png',
      name: 'Leslie Alexander',
      short_description: 'Content Writer @Company',
      facebook: "assets/img/footer/facebook.png",
      twiter: "assets/img/footer/twiter.png",
      instagram: "assets/img/footer/instagram.png",
      in: "assets/img/footer/in.png",
    },
    {
      id: 8,
      image: 'assets/img/about_us/section_5_img_user_4.png',
      name: 'Leslie Alexander',
      short_description: 'Content Writer @Company',
      facebook: "assets/img/footer/facebook.png",
      twiter: "assets/img/footer/twiter.png",
      instagram: "assets/img/footer/instagram.png",
      in: "assets/img/footer/in.png",
    }
  ]
}
