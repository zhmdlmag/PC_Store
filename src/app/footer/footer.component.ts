import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }


  sendMessage(message: HTMLTextAreaElement): void{
    const m1 = (message as unknown);
    const m2 = (m1 as string);
    this.messageService.sendMessage(m2);
  }
}
