import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, mergeMap, Observable, of, switchMap, take } from 'rxjs';

console.log('Transformation')

// map

const observable = new Observable((subscriber) => {
  subscriber.next(10);
  subscriber.next(11);
  subscriber.next(12);
});

const observer = {
  next: (value: any) => console.log(value),
};

observable.pipe(map((value: any) => value * 2)).subscribe(observer)

// switchmap

// cancela a inscriçao anterior e começa uma nova??

const switched = of(1, 2, 3).pipe(switchMap(x => of(x, x ** 2, x ** 3)));
// cada observable passa por um segundo observable
// percorre o 1 nos 3 of do segundo of, depois o 2 e depois o 3
switched.subscribe(x => console.log(x));



fromEvent(document, 'click')
  .pipe(
    // restart counter on every click
    mergeMap(() => interval(1000))
  )
  .subscribe(console.log);

fromEvent(document, 'click')
  .pipe(
    // restart counter on every click
    switchMap(() => interval(1000))
  )
  .subscribe(console.log);



  // const h = interval(100).pipe(
  //   take(10),
  //   map(i => [i])
  // ).subscribe(value => console.log(value));

  // const source$ = interval(5000);

  // source$
  //   .pipe(
  //     mergeMap(
  //       // project
  //       val => interval(1).pipe(take(4)),
  //       // resultSelector
  //       (oIndex, oVal, iIndex, iVal) => [oIndex, oVal, iIndex, iVal],
  //       // concurrent
  //       2
  //     )
  //   ).subscribe(value => console.log(value))




const source = interval(1000);
const example = source.pipe(
  map(val => {
    return (val + 'map');
  }),
);

const subscribe = example.subscribe({
  next: val => console.log(val),
});


const source2 = interval(1000);
const example2 = source2.pipe(
  mergeMap(val => {
    return of(val + 'switchMap');
  }),
);

const subscribe2 = example2.subscribe({
  next: val => console.log(val),
});


// scan Reduce over time.

// RxJS v6+
import { scan } from 'rxjs/operators';

const source3 = of(1, 2, 3);
// basic scan example, sum over time starting with zero
const example3 = source3.pipe(scan((acc, curr) => acc + curr, 0));
// log accumulated values
// output: 1,3,6
const subscribe3 = example3.subscribe(val => console.log(val));

// mapTo Map emissions to constant value.

import { mapTo } from 'rxjs/operators';

//emit value every two seconds
const source4 = interval(2000);
//map all emissions to one value
const example4 = source4.pipe(mapTo('HELLO WORLD!'));
//output: 'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
const subscribe4 = example4.subscribe(val => console.log(val));

// bufferTime Collect emitted values until provided time has passed, emit as array.

// RxJS v6+
import { bufferTime } from 'rxjs/operators';

//Create an observable that emits a value every 500ms
const source5 = interval(500);
//After 2 seconds have passed, emit buffered values as an array
const example5 = source5.pipe(bufferTime(2000));
//Print values to console
//ex. output [0,1,2]...[3,4,5,6]
const subscribe5 = example5.subscribe(val =>
  console.log('Buffered with Time:', val)
);

// concatMap Map values to inner observable, subscribe and emit in order.


// RxJS v6+
import { concatMap, delay } from 'rxjs/operators';

//emit delay value
const source6 = of(2000, 1000);
// map value from source into inner observable, when complete emit result and move to next
const example6 = source6.pipe(
  concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
);
//output: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
const subscribe6 = example6.subscribe(val =>
  console.log(`With concatMap: ${val}`)
);

// showing the difference between concatMap and mergeMap
const mergeMapExample = source
  .pipe(
    // just so we can log this after the first example has run
    delay(5000),
    mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
  )
  .subscribe(val => console.log(`With mergeMap: ${val}`));

  // groupBy Group into observables based on provided value.

  // RxJS v6+
import { groupBy, toArray } from 'rxjs/operators';

const people = [
  { name: 'Sue', age: 25 },
  { name: 'Joe', age: 30 },
  { name: 'Frank', age: 25 },
  { name: 'Sarah', age: 35 }
];
//emit each person
const source7 = from(people);
//group by age
const example7 = source7.pipe(
  groupBy(person => person.age),
  // return each item in group as array
  mergeMap(group => group.pipe(toArray()))
);
/*
  output:
  [{age: 25, name: "Sue"},{age: 25, name: "Frank"}]
  [{age: 30, name: "Joe"}]
  [{age: 35, name: "Sarah"}]
*/
const subscribe7 = example7.subscribe(val => console.log(val));

// pluck Select property to emit.

// RxJS v6+
import { pluck } from 'rxjs/operators';

const source8 = from([
  { name: 'Joe', age: 30 },
  { name: 'Sarah', age: 35 }
]);
//grab names
const example8 = source8.pipe(pluck('name'));
//output: "Joe", "Sarah"
const subscribe8 = example8.subscribe(val => console.log(val));

// toArray Collects all source emissions and emits them as an array when the source completes.

// RxJS v6+


interval(100)
  .pipe(take(10), toArray())
  .subscribe(console.log);

// output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// buffer Collect output values until provided observable emits, emit as array.

// RxJS v6+
import { buffer, filter, throttleTime } from 'rxjs/operators';

// streams
const clicks$ = fromEvent(document, 'click');

/*
Collect clicks that occur, after 250ms emit array of clicks
*/
clicks$
  .pipe(
    buffer(clicks$.pipe(throttleTime(250))),
    // if array is greater than 1, double click occured
    filter(clickArray => clickArray.length > 1)
  )
  .subscribe(() => console.log('Double Click!'));


  // reduce Reduces the values from source observable to a single value that's emitted when the source completes.

  // RxJS v6+
import { reduce } from 'rxjs/operators';

const source9 = of(1, 2, 3, 4);
const example9 = source9.pipe(reduce((acc, val) => acc + val));
//output: Sum: 10'
const subscribe9 = example9.subscribe(val => console.log('Sum:', val));


// partition Split one observable into two based on provided predicate.



@Component({
  selector: 'app-transformation',
  templateUrl: './transformation.component.html',
  styleUrls: ['./transformation.component.scss']
})
export class TransformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}

