import { NgForOf, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AllPosts, CategoryCard } from 'src/app/modues/glob_muduls';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';

@Component({
  standalone: true,
  imports:[
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgForOf,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    NgIf,
    ReactiveFormsModule,
    
  ],
  selector: 'app-author-add-new-posts',
  templateUrl: './author-add-new-posts.component.html',
  styleUrls: ['./author-add-new-posts.component.css']
})
export class AuthorAddNewPostsComponent {
  newPost!:AllPosts
  category:CategoryCard[] = []
  categoryValue!: string;

  constructor(private http:HttpService){}
  form = new FormGroup({
    image: new FormControl("", [Validators.required]),
    category: new FormControl("", [Validators.required]),
    title: new FormControl("", [Validators.required]),
    short_description: new FormControl("",[Validators.required]),
  });

  ngOnInit(): void {
    
  }


 addNewPost(){
  
  this.http.addItem<AllPosts>(`${environment.posts.post}`, this.newPost).subscribe(() => {

  });
 }
 getCategory() {
  this.http.getItem<CategoryCard[]>(`${environment.category.get}`).subscribe(data => {
    this.category = data;
  });
}

}
