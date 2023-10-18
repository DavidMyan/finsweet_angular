import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getUserInfo: any;
  
  constructor(private http:HttpClient) { }
  getItem<type>(url:string){
    return this.http.get<type>(url);
  }
  postItem<Type>(url:string,item:Type){
    return this.http.post<Type>(url,item);
  }
  deletItem<Type>(url:string,item:Type){
    return this.http.post<Type>(url,item);
  }
}
