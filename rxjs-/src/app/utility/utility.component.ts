import { Component, OnInit } from '@angular/core';
import { repeat } from 'rxjs/operators';

import { fromEvent, of } from 'rxjs';
import { mergeMap, delay, takeUntil } from 'rxjs/operators';
import { tap, map } from 'rxjs/operators';

// delay Delay emitted values by given time.
const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');

mousedown$
  .pipe(mergeMap((event) => of(event).pipe(delay(700), takeUntil(mouseup$))))
  .subscribe((event) => console.log('Long Press!', event));

of('teste')
  .pipe(delay(5000))
  .subscribe((event) => console.log(event));

// Tap Transparently perform actions or side-effects, such as logging.


const source = of(1, 2, 3, 4, 5);
// transparently log values from source with 'tap'
const example = source.pipe(
  tap((val) => console.log(`BEFORE MAP: ${val}`)),
  map((val) => val + 10),
  tap((val) => console.log(`AFTER MAP: ${val}`))
);

//'tap' does not transform values
//output: 11...12...13...14...15
const subscribe = example.subscribe((val) => console.log(val));

// repeat Repeats an observable on completion.


const delayedThing = of('delayed value').pipe(delay(2000));

delayedThing
  .pipe(repeat(3))
  // delayed value...delayed value...delayed value
  .subscribe(console.log);

// delayWhen Delay emitted values determined by provided function.

import { interval, timer } from 'rxjs';
import { delayWhen } from 'rxjs/operators';

//emit value every second
const message = interval(1000);
//emit value after five seconds
const delayForFiveSeconds = () => timer(5000);
//after 5 seconds, start emitting delayed interval values
const delayWhenExample = message.pipe(delayWhen(delayForFiveSeconds));
//log values, delayed for 5 seconds
//ex. output: 5s....1...2...3
const subscribe2 = delayWhenExample.subscribe((val) => console.log(val));

// finalize Call a function when observable completes or errors

import { take, finalize } from 'rxjs/operators';

//emit value in sequence every 1 second
const source2 = interval(1000);
//output: 0,1,2,3,4,5....
const example2 = source2.pipe(
  take(5), //take only the first 5 values
  finalize(() => console.log('Sequence complete')) // Execute when the observable completes
)
const subscribe3 = example2.subscribe(val => console.log(val));


// timeinterval Convert an Observable that emits items into one that emits indications of the amount of time elapsed between those emissions

import { timeInterval } from 'rxjs/operators';

fromEvent(document, 'mousedown')
  .pipe(timeInterval(), tap(console.log))
  .subscribe(
    i =>
      (document.body.title = `milliseconds since last click: ${i.interval}`)
  );


  //find Emit the first item that passes predicate then complete.

  // RxJS v6+
import { find, repeatWhen, mapTo, startWith, filter } from 'rxjs/operators';

// elem ref
const status: any = document.getElementById('status');

// streams
const clicks$ = fromEvent(document, 'click');

clicks$
  .pipe(
    find((event: any) => event.target.id === 'box'),
    mapTo('Found!'),
    startWith('Find me!'),
    // reset when click outside box
    repeatWhen(() =>
      clicks$.pipe(filter((event: any) => event.target.id !== 'box'))
    )
  )
  .subscribe(message => (status.innerHTML = message));


 // skip Skip the provided number of emitted values.

 // RxJS v6+
import { skip } from 'rxjs/operators';

//emit every 1s
const source3 = interval(1000);
//skip the first 5 emitted values
const example3 = source3.pipe(skip(5));
//output: 5...6...7...8........
const subscribe4 = example3.subscribe(val => console.log(val));

// single Emit single item that passes expression.

// RxJS v6+
import { from } from 'rxjs';
import { single } from 'rxjs/operators';

//emit (1,2,3,4,5)
const source5 = from([1, 2, 3, 4, 5]);
//emit one item that matches predicate
const example5 = source5.pipe(single(val => val === 4));
//output: 4
const subscribe5 = example5.subscribe(val => console.log(val));

// ignoreElements Ignore everything but complete and error.

// RxJS v6+
import { ignoreElements } from 'rxjs/operators';

//emit value every 100ms
const source6 = interval(100);
//ignore everything but complete
const example6 = source6.pipe(take(5), ignoreElements());
//output: "COMPLETE!"
const subscribe6 = example6.subscribe(
  val => console.log(`NEXT: ${val}`),
  val => console.log(`ERROR: ${val}`),
  () => console.log('COMPLETE!')
);

//throttle Emit value on the leading edge of an interval, but suppress new values until durationSelector has completed.

// RxJS v6+
import { throttle } from 'rxjs/operators';

//emit value every 1 second
const source7 = interval(1000);
//throttle for 2 seconds, emit latest value
const example7 = source7.pipe(throttle(val => interval(2000)));
//output: 0...3...6...9
const subscribe7 = example7.subscribe(val => console.log(val));

@Component({
  selector: 'app-utility',
  templateUrl: './utility.component.html',
  styleUrls: ['./utility.component.scss'],
})
export class UtilityComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
