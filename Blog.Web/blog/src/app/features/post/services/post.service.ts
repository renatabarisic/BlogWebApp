import { Injectable } from '@angular/core';
import { AddPost } from '../models/add-post.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  createPost(data: AddPost): Observable<Post> {
    return this.http.post<Post>(`${environment.apiBaseUrl}/api/posts`, data);
  }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiBaseUrl}/api/posts`);
  }
}
