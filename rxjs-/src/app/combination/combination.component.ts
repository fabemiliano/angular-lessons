import { Component, OnInit } from '@angular/core';

// concat Subscribe to observables in order as previous completes

import { of, concat, Observable } from 'rxjs';
console.log('concat')
concat(
  of(1, 2, 3),
  // subscribed after first completes
  of(4, 5, 6),
  // subscribed after second completes
  of(7, 8, 9)
)
  // log: 1, 2, 3, 4, 5, 6, 7, 8, 9
  .subscribe(console.log);
console.log('merge')
merge(
  of(1, 2, 3),
  // subscribed after first completes
  of(4, 5, 6),
  // subscribed after second completes
  of(7, 8, 9)
)
  // log: 1, 2, 3, 4, 5, 6, 7, 8, 9
  .subscribe(console.log);

// merge Turn multiple observables into a single observable

import { mapTo } from 'rxjs/operators';
import { interval, merge } from 'rxjs';

//emit every 2.5 seconds

// zip After all observables emit, emit values as an array

// RxJS v6+
import { delay } from 'rxjs/operators';
import {  zip } from 'rxjs';

const sourceOne = of('Hello');
const sourceTwo = of('World!');
const sourceThree = of('Goodbye');
const sourceFour = of('World!');
//wait until all observables have emitted a value then emit all as an array
const example = zip(
  sourceOne,
  sourceTwo.pipe(delay(1000)),
  sourceThree.pipe(delay(2000)),
  sourceFour.pipe(delay(3000))
);
//output: ["Hello", "World!", "Goodbye", "World!"]
const subscribe = example.subscribe(val => console.log('zip', val));

// forkjooin When all observables complete, emit the last emitted value from each.

import { ajax } from 'rxjs/ajax';
import { forkJoin } from 'rxjs';

/*
  when all observables complete, provide the last
  emitted value from each as dictionary
*/
forkJoin(
  // as of RxJS 6.5+ we can use a dictionary of sources
  {
    google: ajax.getJSON('https://api.github.com/users/google'),
    microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
    users: ajax.getJSON('https://api.github.com/users')
  }
)
  // { google: object, microsoft: object, users: array }
  .subscribe(console.log);

import { take } from 'rxjs/operators';

const myPromise = (val: string) =>
  new Promise(resolve =>
    setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
  );

/*
  when all observables complete, give the last
  emitted value from each as an array
*/
const example2 = forkJoin({
  //emit 'Hello' immediately
  sourceOne: of('Hello'),
  //emit 'World' after 1 second
  sourceTwo: of('World').pipe(delay(1000)),
  //emit 0 after 1 second
  sourceThree: interval(1000).pipe(take(1)),
  //emit 0...1 in 1 second interval
  sourceFour: interval(1000).pipe(take(2)),
  //promise that resolves to 'Promise Resolved' after 5 seconds
  sourceFive: myPromise('RESULT')
});
/*
 * Output:
 * {
 *   sourceOne: "Hello",
 *   sourceTwo: "World",
 *   sourceThree: 0,
 *   sourceFour: 1,
 *   sourceFive: "Promise Resolved: RESULT"
 * }
 */
const subscribe2 = example2.subscribe(val => console.log('forkjoin', val));

// combineLatest When any observable emits a value, emit the last emitted value from each

console.log('latest')
import { timer, combineLatest } from 'rxjs';

const timerOne$ = timer(1000, 4000);
const timerTwo$ = timer(1000, 10000);
const timerThree$ = timer(1000, 15000);

combineLatest(
  timerOne$,
  timerTwo$,
  timerThree$,
  // combineLatest also takes an optional projection function
  (one, two, three) => {
    return `Timer One (Proj) Latest: ${one},
              Timer Two (Proj) Latest: ${two},
              Timer Three (Proj) Latest: ${three}`;
  }
).subscribe(console.log);


// startwith Emit given value first

import { startWith } from 'rxjs/operators';

//emit (1,2,3)
const source = of(1, 2, 3);
//start with 0
const example3 = source.pipe(startWith(0));
//output: 0,1,2,3
const subscribe3 = example3.subscribe(val => console.log('startqith', val));


// withLatestFrom Also provide the last value from another observable.

import { withLatestFrom, map } from 'rxjs/operators';

//emit every 5s
const source2 = interval(5000);
//emit every 1s
const secondSource = interval(1000);
const example4 = source2.pipe(
  withLatestFrom(secondSource),
  map(([first, second]) => {
    return `First Source (5s): ${first} Second Source (1s): ${second}`;
  })
);
/*
  "First Source (5s): 0 Second Source (1s): 4"
  "First Source (5s): 1 Second Source (1s): 9"
  "First Source (5s): 2 Second Source (1s): 14"
  ...
*/
const subscribe4 = example.subscribe(val => console.log(val));

@Component({
  selector: 'app-combination',
  templateUrl: './combination.component.html',
  styleUrls: ['./combination.component.scss'],
})
export class CombinationComponent implements OnInit {
  constructor() {}

  example!: Observable<number>;

  ngOnInit(): void {
    this.merge()
  }

  merge() {
    const first = interval(2500);
    //emit every 2 seconds
    const second = interval(2000);
    //emit every 1.5 seconds
    const third = interval(1500);
    //emit every 1 second
    const fourth = interval(1000);

    //emit outputs from one observable
    this.example = merge(first, second, third, fourth);

    //output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
    const subscribe = this.example.subscribe((val) => console.log('merge', val));
  }
}
