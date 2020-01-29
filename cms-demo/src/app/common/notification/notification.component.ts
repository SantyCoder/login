import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs/observable/timer';
//Service
import { NotificationService } from '../notification/notification.service';
// -
const MODE = {
  OPEN: 'open',
  CLOSE: 'close'
}
@Component({
  selector: 'demo-app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  private timer;
  title: string;
  type: string;
  status: string;
  message: string;
  constructor(private notification: NotificationService) { }

  ngOnInit() {
    this.notification.currentMessage.subscribe(
      (response) => {
        this.message = response.message;
        this.type = response.type;
        this.title = response.title;
        if (this.message !== '') {
          this.status = MODE.OPEN;
          timer(4000).subscribe(i => this.close());
        }
      }
    );
  }

  close(): void {
    if (this.status !== '') {
      this.status = MODE.CLOSE;
      this.timer = timer(600).subscribe(i => this.status = '');
    }
  }
}
