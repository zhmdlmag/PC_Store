import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  private backUrl = 'api/';


  constructor(private http: HttpClient,
              private messageService: MessageService) { }
}
