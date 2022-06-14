import { Component, OnInit } from '@angular/core';


import { ajax } from 'rxjs/ajax';

const githubUsers = `https://api.github.com/users?per_page=2`;

const users = ajax(githubUsers);

const subscribe = users.subscribe(
  res => console.log(res),
  err => console.error(err)
);


// RxJS v6+
import { Observable, of } from 'rxjs';
/*
  Create an observable that emits 'Hello' and 'World' on
  subscription.
*/
const hello = Observable.create((observer: any) => {
  observer.next('Hello');
  observer.next('World');
  observer.complete();
});

//output: 'Hello'...'World'
const subscribe2 = hello.subscribe((val: any) => console.log(val));


// from Turn an array, promise, or iterable into an observable. This operator can be used to convert a promise to an observable!

import { from } from 'rxjs';

//emit array as a sequence of values
const arraySource = from([1, 2, 3, 4, 5]);
//output: 1,2,3,4,5
const subscribe3 = arraySource.subscribe(val => console.log(val));

//emit result of promise
const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
//output: 'Hello World'
const subscribe4 = promiseSource.subscribe(val => console.log(val));

// of Emit variable amount of values in a sequence and then emits a complete notification.

//emits any number of provided values in sequence
const source = of(1, 2, 3, 4, 5);
//output: 1,2,3,4,5
const subscribe5 = source.subscribe(val => console.log(val));


// from event Turn event into observable sequence

import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

//create observable that emits click events
const source2 = fromEvent(document, 'click');
//map to string with given event timestamp
const example = source2.pipe(map(event => `Event time: ${event.timeStamp}`));
//output (example): 'Event time: 7276.390000000001'
const subscribe6 = example.subscribe(val => console.log(val));


// interval Emit numbers in sequence based on provided timeframe.

import { interval } from 'rxjs';

//emit value in sequence every 1 second
const source3 = interval(1000);
//output: 0,1,2,3,4,5....
const subscribe7 = source3.subscribe(val => console.log(val));


// throw Emit error on subscription

import { throwError } from 'rxjs';

//emits an error with specified value on subscription
const source4 = throwError('This is an error!');
//output: 'Error: This is an error!'
const subscribe8 = source4.subscribe({
  next: val => console.log(val),
  complete: () => console.log('Complete!'),
  error: val => console.log(`Error: ${val}`)
});


//timer After given duration, emit numbers in sequence every specified duration.

import { timer } from 'rxjs';

//emit 0 after 1 second then complete, since no second argument is supplied
const source5 = timer(5000); // emite uma vez ap[os 5 segundo]
const source6 = timer(5000, 1000); //emite apos 5 segundo depois a cada segundo
//output: 0
const subscribe9 = source5.subscribe(val => console.log('timer', val));
const subscribe10 = source6.subscribe(val => console.log('timer', val));


// range Emit numbers in provided range in sequence

import { range } from 'rxjs';

//emit 1-10 in sequence
const source7 = range(1, 10);
//output: 1,2,3,4,5,6,7,8,9,10
const example2 = source7.subscribe(val => console.log(val));

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.scss']
})
export class CreationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
