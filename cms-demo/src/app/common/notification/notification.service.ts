import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private messageSource = new BehaviorSubject<any>({ message: '', type: '', title: '' });
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  show(message: string, type: string, title?: string) {
    this.messageSource.next({ message: message, type: type, title: title });
  }
}
