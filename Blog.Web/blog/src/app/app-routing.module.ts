import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryGridComponent } from './features/category/category-grid/category-grid.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { EditCategoryComponent } from './features/category/edit-category/edit-category.component';
import { PostGridComponent } from './features/post/post-grid/post-grid.component';
import { AddPostComponent } from './features/post/add-post/add-post.component';

const routes: Routes = [
  {
    path: 'admin/categories',
    component: CategoryGridComponent,
  },
  {
    path: 'admin/categories/add',
    component: AddCategoryComponent,
  },
  {
    path: 'admin/categories/:id',
    component: EditCategoryComponent,
  },
  {
    path: 'admin/posts',
    component: PostGridComponent,
  },
  {
    path: 'admin/posts/add',
    component: AddPostComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
