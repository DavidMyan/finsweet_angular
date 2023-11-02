import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/modues/glob_muduls';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgForOf } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  standalone:true,
  imports: [MatExpansionModule,NgForOf,MatIconModule],
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit{
  messages: Message[] = [];
  regMessages: any[] = [];
  panelOpenState = false;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.getMessage();
    this.getRaegMessages()
  }

  getMessage() {
    this.http.getItem<Message[]>(environment.comments.get).subscribe(data => {
      this.messages = data;
    });
  }
  deleteMessage(id:number){
      this.http.deletItem(`${environment.comments.get}/${id}`).subscribe(() =>{
        this.getMessage()
    })
  }
  getRaegMessages() {
    this.http.getItem<any[]>(environment.regRequest.get).subscribe(data => {
      this.regMessages = data;
    });
  }
  deleteRegMessages(id:number){
      this.http.deletItem(`${environment.regRequest.get}/${id}`).subscribe(() =>{
        this.getMessage()
        this.getRaegMessages()

    })
  }
}
