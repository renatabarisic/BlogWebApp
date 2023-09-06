import { Component, OnInit } from '@angular/core';
import { AddPost } from '../models/add-post.model';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  model: AddPost;

  constructor(private postService: PostService, private router: Router) {
    this.model = {
      title: '',
      shortDescription: '',
      urlHandle: '',
      content: '',
      imageUrl: '',
      author: '',
      publishedDate: new Date(),
      isVisible: true,
    };
  }

  ngOnInit(): void {}

  onFormSubmit(): void {
    this.postService.createPost(this.model).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/posts');
      },
    });
  }
}
