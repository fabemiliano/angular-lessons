import { Component } from '@angular/core';
import { filter, map, Observable, pluck, tap } from 'rxjs';

// observable emits data
// operators transform the data inside of a pipe
// observer do something with the data

const users = {
  data: [
    {
      id: 1,
      status: 'active',
      age: 14,
    },
    {
      id: 1,
      status: 'inactive',
      age: 12,
    },
    {
      id: 1,
      status: 'active',
      age: 42,
    },
    {
      id: 1,
      status: 'inactive',
      age: 42,
    },
    {
      id: 1,
      status: 'active',
      age: 13,
    },
    {
      id: 1,
      status: 'inactive',
      age: 75,
    },
    {
      id: 1,
      status: 'inactive',
      age: 43,
    },
    {
      id: 1,
      status: 'inactive',
      age: 54,
    },
    {
      id: 1,
      status: 'active',
      age: 7,
    },
    {
      id: 1,
      status: 'active',
      age: 17,
    },
  ],
};

const observable = new Observable((subscriber) => {
  subscriber.next(10);
  subscriber.next(11);
  subscriber.next(12);
});

const observable2 = new Observable((subscriber) => {
  subscriber.next(users);
});

const observer = {
  next: (value: any) => console.log(value),
};

observable.subscribe(observer);
observable2.subscribe(observer);
observable2
  .pipe(
    tap((data: any) => console.log(data)),
    map((data: any) => data.data),
    map((value) => value.filter((e: any) => e.status === 'active'))
  )
  .subscribe(observer);



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'rxjs';
}
