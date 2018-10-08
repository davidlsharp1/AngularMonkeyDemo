import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Monkey } from '../models/monkey';

@Injectable({
  providedIn: 'root'
})
export class MonkeyService implements OnInit {

  url = 'https://raw.githubusercontent.com/jamesmontemagno/app-monkeys/master/MonkeysApp/monkeydata.json';
  constructor( private http: HttpClient ) {}

  ngOnInit(): void {}

  getData(): Observable<Array<Monkey>> {
    return this.http.get<Array<Monkey>>(this.url);
  }


}





