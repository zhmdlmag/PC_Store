import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  logout(): void{
    this.http.post('http://localhost:8000/api/logout', {}, {withCredentials: true})
      .subscribe(() => console.log('You are now not authenticated'));
  }

}
