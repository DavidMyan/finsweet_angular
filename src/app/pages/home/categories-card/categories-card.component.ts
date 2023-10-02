import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoryCard } from 'src/app/modues/glob_muduls';
@Component({
  standalone:true,
  imports:[RouterModule],
  selector: 'app-categories-card',
  templateUrl: './categories-card.component.html',
  styleUrls: ['./categories-card.component.css']
})
export class CategoriesCardComponent {
  @Input('item') category!:CategoryCard
}
