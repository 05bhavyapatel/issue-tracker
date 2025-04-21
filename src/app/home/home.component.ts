import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private dialog: MatDialog) {}
  //show all content 
  showContact() {
    this.dialog.open(ContactDialogComponent, {
      width: '350px'
    });
  }

}
