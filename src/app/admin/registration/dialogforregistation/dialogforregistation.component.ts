import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  selector: 'app-dialogforregistation',
  templateUrl: './dialogforregistation.component.html',
  styleUrls: ['./dialogforregistation.component.css']
})
export class DialogforregistationComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogforregistationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      sendForum: boolean
    }) { }

  sendMesage() {
    this.data.sendForum = true;
    this.dialogRef.close(this.data.sendForum); 
  }

  dontSendMesage() {
    this.data.sendForum = false;
    this.dialogRef.close(this.data.sendForum); 
  }
}
