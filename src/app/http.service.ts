import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllPosts, CategoryCard, SingleAuthor, UsersCard } from './modues/glob_muduls';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getCategory(limit: number): Observable<CategoryCard[]> {
    return this.http.get<CategoryCard[]>(`${this.apiUrl}/category?_end=${limit}`);
  }
  getPosts(limit:number): Observable<AllPosts[]>{
    return this.http.get<AllPosts[]>(`${this.apiUrl}/posts?_start=4&_end=${limit}`)
  }

  getSingleAuthor():Observable<SingleAuthor[]> {
    return this.http.get<SingleAuthor[]>(`${this.apiUrl}/singleAuthor`);
  }

  getUsersInfo(limit: number): Observable<UsersCard[]> {
    return this.http.get<UsersCard[]>(`${this.apiUrl}/usersInfo?_start=0&_end=${limit}`)}
}
