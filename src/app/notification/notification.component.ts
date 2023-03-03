import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [ngClass]="{fadeout: displayNotification}">
    <p class="notification">
      <marquee [scrollAmount]="10">This Website Uses cookies to Provide better user experience</marquee>
      <button class="btn" (click)="closeNotification()">X</button>
</p></div>`,
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayNotification =false;
  closeNotification(){
    this.displayNotification =true;
  }

}
