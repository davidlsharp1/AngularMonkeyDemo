import { MonkeyService } from './../../services/monkey.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Monkey } from '../../models/monkey';

@Component({
  selector: 'app-monkey',
  templateUrl: './monkey.component.html',
  styleUrls: ['./monkey.component.css']
})
export class MonkeyComponent implements OnInit {

  monkeys$: Observable<Array<Monkey>>;

  constructor(private monkeyService: MonkeyService) { }

  ngOnInit() {
    this.getMonkeys();
  }

  getMonkeys(): void {
    this.monkeys$ = this.monkeyService.getData();
    console.log(this.monkeys$);
  }


}
