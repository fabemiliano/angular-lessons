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

