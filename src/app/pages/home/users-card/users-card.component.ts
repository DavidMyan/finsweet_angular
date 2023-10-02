import { Component, Input } from '@angular/core';
import { UsersCard } from 'src/app/modues/glob_muduls';
@Component({
  standalone:true,
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.css']
})
export class UsersCardComponent {
  @Input('item')userCard!:UsersCard
}
