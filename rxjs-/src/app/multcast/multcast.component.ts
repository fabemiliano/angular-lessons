import { Component, OnInit } from '@angular/core';

// RxJS v6+
import { timer } from 'rxjs';
import { tap, mapTo, share } from 'rxjs/operators';

//emit value in 1s
const source = timer(1000);
//log side effect, emit result
const example = source.pipe(
  tap(() => console.log('***SIDE EFFECT***')),
  mapTo('***RESULT***')
);

/*
  ***NOT SHARED, SIDE EFFECT WILL BE EXECUTED TWICE***
  output:
  "***SIDE EFFECT***"
  "***RESULT***"
  "***SIDE EFFECT***"
  "***RESULT***"
*/
const subscribe = example.subscribe(val => console.log(val));
const subscribeTwo = example.subscribe(val => console.log(val));

//share observable among subscribers
const sharedExample = example.pipe(share());
/*
  ***SHARED, SIDE EFFECT EXECUTED ONCE***
  output:
  "***SIDE EFFECT***"
  "***RESULT***"
  "***RESULT***"
*/
const subscribeThree = sharedExample.subscribe(val => console.log(val));
const subscribeFour = sharedExample.subscribe(val => console.log(val));


// RxJS v6+
import { Subject, interval } from 'rxjs';
import { take, multicast } from 'rxjs/operators';

//emit every 2 seconds, take 5
const source2 = interval(2000).pipe(take(5));

const example2 = source2.pipe(
  //since we are multicasting below, side effects will be executed once
  tap(() => console.log('Side Effect #1')),
  mapTo('Result!')
);

//subscribe subject to source upon connect()
const multi = example.pipe(multicast(() => new Subject()));
/*
  subscribers will share source
  output:
  "Side Effect #1"
  "Result!"
  "Result!"
  ...
*/
const subscriberOne = multi.subscribe(val => console.log(val));
const subscriberTwo = multi.subscribe(val => console.log(val));
//subscribe subject to source
// multi.connect();

@Component({
  selector: 'app-multcast',
  templateUrl: './multcast.component.html',
  styleUrls: ['./multcast.component.scss']
})
export class MultcastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
