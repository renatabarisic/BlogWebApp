import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryGridComponent } from './features/category/category-grid/category-grid.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';

const routes: Routes = [
  {
    path: 'admin/categories',
    component: CategoryGridComponent,
  },
  {
    path: 'admin/categories/add',
    component: AddCategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
