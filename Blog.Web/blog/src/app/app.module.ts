import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './core/components/nav/nav.component';
import { CategoryGridComponent } from './features/category/category-grid/category-grid.component';
import { AddCategoryComponent } from './features/category/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EditCategoryComponent } from './features/category/edit-category/edit-category.component';
import { PostGridComponent } from './features/post/post-grid/post-grid.component';
import { AddPostComponent } from './features/post/add-post/add-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryGridComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    PostGridComponent,
    AddPostComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
