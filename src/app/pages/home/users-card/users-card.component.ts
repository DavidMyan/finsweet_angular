import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersCard } from 'src/app/modues/glob_muduls';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.css']
})
export class UsersCardComponent {
  @Input('item') userCard!: UsersCard;
}
