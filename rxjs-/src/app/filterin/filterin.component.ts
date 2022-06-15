import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';


// Filter

// nao filtra os valores dentro do resulado, mas cada valor emitido (diferente do array filter)

// no caso abaixo quando é emitido 11 o subscribe não retorna o valor

console.log('Filter')

// debounceTime Discard emitted values that take less than the specified time between output
// 💡 This operator is popular in scenarios such as type-ahead where the rate of user input must be controlled!

// RxJS v6+
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

// elem ref




const observable = new Observable((subscriber) => {
  subscriber.next(10);
  subscriber.next(11);
  subscriber.next(12);
});

const observer = {
  next: (value: any) => console.log(value),
};

observable.pipe(filter((value: any) => (value % 2) === 0)).subscribe(observer)


// take Emit provided number of values before completing.

// RxJS v6+
import { of } from 'rxjs';
import { take } from 'rxjs/operators';

//emit 1,2,3,4,5
const source = of(1, 2, 3, 4, 5);
//take the first emitted value then complete
const example = source.pipe(take(1));
//output: 1
const subscribe = example.subscribe(val => console.log(val));

//takeUntilEmit values until provided observable emits. 💡 If you only need a specific number of values, try !

// RxJS v6+
import { interval, timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

//emit value every 1s
const source2 = interval(1000);
//after 5 seconds, emit value
const timer$ = timer(5000);
//when timer emits after 5s, complete source
const example2 = source2.pipe(takeUntil(timer$));
//output: 0,1,2,3
const subscribe2 = example2.subscribe(val => console.log(val));

// first (last) Emit the first value or first to pass provided expression.

// RxJS v6+
import { from } from 'rxjs';
import { first } from 'rxjs/operators';

const source3 = from([1, 2, 3, 4, 5]);
//no arguments, emit first value
const example3 = source3.pipe(first());
//output: "First value: 1"
const subscribe3 = example3.subscribe(val => console.log(`First value: ${val}`));


// distinct Emits items emitted that are distinct based on any previously emitted item.
// RxJS v6+
import { distinct } from 'rxjs/operators';

of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5)
  .pipe(distinct())
  // OUTPUT: 1,2,3,4,5
  .subscribe(console.log);
​
// debounce Discard emitted values that take less than the specified time, based on selector function, between output.

// RxJS v6+
import { debounce } from 'rxjs/operators';

//emit four strings
const example4 = of('WAIT', 'ONE', 'SECOND', 'Last will display');
/*
    Only emit values after a second has passed between the last emission,
    throw away all other values
*/
const debouncedExample = example4.pipe(debounce(() => timer(1000)));
/*
    In this example, all values but the last will be omitted
    output: 'Last will display'
*/
const subscribe4 = debouncedExample.subscribe(val => console.log(val));
@Component({
  selector: 'app-filterin',
  templateUrl: './filterin.component.html',
  styleUrls: ['./filterin.component.scss']
})
export class FilterinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const searchBox: any = document.getElementById('search');

// streams
const keyup$ = fromEvent(searchBox, 'keyup');

// wait .5s between keyups to emit current value
keyup$
  .pipe(
    map((i: any) => i.currentTarget.value),
    debounceTime(5000)
  )
  .subscribe(console.log);
  }

}
