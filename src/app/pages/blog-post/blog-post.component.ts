import { Component } from '@angular/core';
import { JoinComponent } from '../home/join/join.component';

@Component({
  standalone:true,
  imports:[JoinComponent],
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent {

}
