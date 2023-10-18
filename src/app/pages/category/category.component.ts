import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AllPosts, CategoryCard } from 'src/app/modues/glob_muduls';
import { AllPostsComponent } from '../blog/all-posts/all-posts.component';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  standalone:true,
  imports:[
    AllPostsComponent,
    NgFor,
    RouterLink,
    NgClass
  ],
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  selectedCategory: string = '';
  filteredPosts: AllPosts[] = [];
  category: CategoryCard[] = [];
  
  constructor(private http: HttpService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(category => {
      this.selectedCategory = category['category'];
      this.http.getItem<AllPosts[]>(`${environment.posts.get}`).subscribe(data => {
        this.filteredPosts = data.filter(post => post.category.toLowerCase() === this.selectedCategory);
      });
    });
    this.http.getItem<CategoryCard[]>(`${environment.category.get}`).subscribe(data => {
      this.category = data;
    });
  }

  isActive: boolean = false;

  toggleActiveState(): void {
    this.isActive = !this.isActive;
}

  isActiveCategory(categoryTitle: string): boolean {
    return this.selectedCategory === categoryTitle;
    
  }
}
