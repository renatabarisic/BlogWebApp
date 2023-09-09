import { Component, OnInit } from '@angular/core';
import { AddPost } from '../models/add-post.model';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../category/services/category.service';
import { Observable } from 'rxjs';
import { Category } from '../../category/models/category.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  model: AddPost;
  categories$?: Observable<Category[]>;

  constructor(
    private postService: PostService,
    private router: Router,
    private categoryService: CategoryService
  ) {
    this.model = {
      title: '',
      shortDescription: '',
      urlHandle: '',
      content: '',
      imageUrl: '',
      author: '',
      publishedDate: new Date(),
      isVisible: true,
      categories: [],
    };
  }

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
  }

  onFormSubmit(): void {
    this.postService.createPost(this.model).subscribe({
      next: (response) => {
        this.router.navigateByUrl('/admin/posts');
      },
    });
  }
}
