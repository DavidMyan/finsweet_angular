import { NgFor } from '@angular/common';
import { Component, Input} from '@angular/core';
import { SingleAuthor } from 'src/app/modues/glob_muduls';

@Component({
  standalone:true,
  imports:[NgFor],
  selector: 'app-single-author',
  templateUrl: './single-author.component.html',
  styleUrls: ['./single-author.component.css']
})
export class SingleAuthorComponent {
@Input('author') author!:SingleAuthor
}
