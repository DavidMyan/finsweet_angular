import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http:HttpClient) { }

  getItem<type>(url:string){
    return this.http.get<type>(url);
  }
  addItem<type>(url: string, item: type) {
    return this.http.post<type>(url, item);
  }
  editItem<type>(url: string, item: type) {
    return this.http.put<type>(url, item);
  }
  deletItem(url:string){
    return this.http.delete(url);
  }
}
