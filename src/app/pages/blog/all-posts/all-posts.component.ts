import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AllPosts } from 'src/app/modues/glob_muduls';
@Component({
  standalone:true,
  imports:[NgClass],
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent {
  @Input() isCotugory: boolean = false;
  @Input() isBlog: boolean = false;
  @Input('allpost') allPosts!:AllPosts
}
