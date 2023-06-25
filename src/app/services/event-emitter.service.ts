import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeToasts = new EventEmitter();

  constructor() { }

  emitToast(title: string, message: string) {
    console.log(title + "entrooooooooo");
    this.invokeToasts.emit({
      title: title,
      message: message
    });
  }
}
