import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Decrement, increment, Increment } from '../ngrx';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter$

  constructor(private store: Store<{secondReducer: any}>) {
    this.counter$ = this.store.select('secondReducer')
   }

  ngOnInit(): void {
  }
  increment() {
    // this.store.dispatch(new Increment())
    this.store.dispatch(increment({payload: 5}))
  }
  decrement() {
    this.store.dispatch(new Decrement())
  }
}
