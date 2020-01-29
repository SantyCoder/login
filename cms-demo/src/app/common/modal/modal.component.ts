import { Component, OnInit } from '@angular/core';
//Modal Service
import { ModalService } from '../modal/modal.service';
@Component({
  selector: 'demo-app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  // Identificador del elemento a eliminar
  idSource: number;
  // Clase CSS de estado para mostrar/ocultar la modal
  show = 'show';
  // Clase CSS para indicar a la UI que se está procesando
  // una acción desde la modal
  executing = false;
  title = '';
  message = '';
  action = '';
  handler: any;

  constructor(private modal: ModalService) { }

  ngOnInit() {
    this.modal.currentMessage.subscribe((response) => {
      this.idSource = response.idSource;
      this.show = response.show;
      this.title = response.title;
      this.message = response.message;
      this.action = response.action;
      this.handler = response.handler;
    });

    this.modal.currentAction.subscribe((response) => {
      this.show = response.action;
      this.executing = response.executing;
    });
  }

  close(event: Event): void {
    event.preventDefault();
    this.modal.actionSource.next({ action: 'cancel' });
    this.show = '';
  }

  execute(): void {
    this.message = '';
    this.executing = true;
    this.handler(this.idSource);
  }
}
