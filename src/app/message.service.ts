import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new Subject<string>();

  constructor() { }

  sendMessage(message: string): void{
    console.log(message);
  }

  receivedMessage(): Observable<string>{
    return this.subject.asObservable();
  }
}
