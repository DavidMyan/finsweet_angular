import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let header = new HttpHeaders({'content-type' : 'application/json'})
    return this.http.post<type>(url, item,{headers : header});
  }
  editItem<type>(url: string, item: type) {
    let header = new HttpHeaders({'content-type' : 'application/json'})
    return this.http.put<type>(url, item,{headers : header});
  }
  deletItem(url:string){
    return this.http.delete(url);
  }
}
