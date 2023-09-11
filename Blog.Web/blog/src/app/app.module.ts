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
import { EditPostComponent } from './features/post/edit-post/edit-post.component';
import { ImageUploadComponent } from './shared/components/image-upload/image-upload.component';
import { MarkdownModule } from 'ngx-markdown';
import { HomeComponent } from './features/public/home/home.component';
import { PostDetailsComponent } from './features/public/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryGridComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    PostGridComponent,
    AddPostComponent,
    EditPostComponent,
    ImageUploadComponent,
    HomeComponent,
    PostDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
