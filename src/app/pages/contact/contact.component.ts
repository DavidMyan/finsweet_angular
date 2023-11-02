import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Message } from 'src/app/modues/glob_muduls';
import { HttpService } from 'src/app/service/http.service';
import { environment } from 'src/environment/environment';

@Component({
  standalone:true,
  imports:[
    NgIf,
    ReactiveFormsModule,
  ],
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  nameControl!: FormGroup;

constructor(private http:HttpService){}

  ngOnInit(): void {
    this.nameControl = new FormGroup({
      fullname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      related: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required,),
    });
  }

  save() {
    const formData = this.nameControl.value;
     this.http.addItem<Message>(`${environment.comments.get}`, formData).subscribe(() => {
    });
  }
}
