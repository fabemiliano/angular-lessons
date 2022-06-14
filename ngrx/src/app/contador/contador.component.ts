import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AppState, decrement, increment } from '../store/app.state';

interface teste {
  appReducer: AppState
}

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})

export class ContadorComponent implements OnInit {

  counter$: Observable<number>;
  constructor(private store: Store<teste>) {
    this.counter$ = this.store.select('appReducer').pipe(map(e => e.counter));
  }

  ngOnInit(): void {
  }
  increment() {
    this.store.dispatch(increment({abc: 5}))
  }
  decrement() {
    this.store.dispatch(decrement({payload: 9}))
  }

}
