import { NgFor,NgIf } from '@angular/common';
import { Component, Input} from '@angular/core';
import { UsersCard } from 'src/app/modues/glob_muduls';

@Component({
  standalone:true,
  imports:[NgFor,NgIf],
  selector: 'app-single-author',
  templateUrl: './single-author.component.html',
  styleUrls: ['./single-author.component.css']
})
export class SingleAuthorComponent {
@Input('author') user!:UsersCard
}
