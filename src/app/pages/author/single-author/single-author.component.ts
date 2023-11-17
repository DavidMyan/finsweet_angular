import { NgFor,NgIf } from '@angular/common';
import { Component, Input} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DilaogForActionComponent } from 'src/app/dialogs/dilaog-for-action/dilaog-for-action.component';
import { UsersCard } from 'src/app/modues/glob_muduls';

@Component({
  standalone:true,
  imports:[
    NgFor,
    NgIf,
  ],
  selector: 'app-single-author',
  templateUrl: './single-author.component.html',
  styleUrls: ['./single-author.component.css']
})
export class SingleAuthorComponent {
@Input('author') user!:UsersCard

constructor(public dialog: MatDialog){}

openImageDialog(imageUrl: string): void {
  this.dialog.open(DilaogForActionComponent, {
      data: {
        isDelete: false,
        fullImageUrl: imageUrl
      }
  });
}
}
