import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  getUserInfo: any;
  
  constructor(private http:HttpClient) { }
  getItem<type>(url:string){
    return this.http.get<type>(url)
  }
}
