import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private messageSource = new BehaviorSubject<any>({
    action: '',
    title: '',
    message: '',
    show: '',
    idSource: undefined,
    callback: null
  });

  actionSource = new BehaviorSubject<any>({ action: '' });

  currentMessage = this.messageSource.asObservable();
  currentAction = this.actionSource.asObservable();
  constructor() { }

  show(idSource: string, action: string, title: string, message: string, show: string, handler: any) {
    this.messageSource.next({
      idSource: idSource,
      action: action,
      title: title,
      message: message,
      show: show,
      handler: handler
    });
  }

  hide(className = '') {
    this.actionSource.next({ action: className, executing: false });
  }
}
