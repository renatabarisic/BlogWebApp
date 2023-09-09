import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { CategoryService } from '../../category/services/category.service';
import { Category } from '../../category/models/category.model';
import { EditPost } from '../models/edit-post.model';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  id: string | null = null;
  routeSubscription?: Subscription;
  model?: Post;
  categories$?: Observable<Category[]>;
  selectedCategories?: string[];
  getPostSubscription?: Subscription;
  editPostSubscription?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private categoryService: CategoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categories$ = this.categoryService.getAllCategories();
    this.routeSubscription = this.route.paramMap.subscribe({
      next: (params) => {
        this.id = params.get('id');

        if (this.id) {
          this.getPostSubscription = this.postService
            .getPostById(this.id)
            .subscribe({
              next: (response) => {
                this.model = response;
                this.selectedCategories = response.categories.map((x) => x.id);
              },
            });
        }
      },
    });
  }

  onFormSubmit(): void {
    if (this.model && this.id) {
      var editPost: EditPost = {
        title: this.model.title,
        shortDescription: this.model.shortDescription,
        content: this.model.content,
        imageUrl: this.model.imageUrl,
        urlHandle: this.model.urlHandle,
        author: this.model.author,
        publishedDate: this.model.publishedDate,
        isVisible: this.model.isVisible,
        categories: this.selectedCategories ?? [],
      };

      this.editPostSubscription = this.postService
        .editPost(this.id, editPost)
        .subscribe({
          next: (response) => {
            this.router.navigateByUrl('/admin/posts');
          },
        });
    }
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.getPostSubscription?.unsubscribe();
    this.editPostSubscription?.unsubscribe();
  }
}
