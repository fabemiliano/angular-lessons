import { Component, OnInit } from '@angular/core';

console.log("---------Subject----------")
console.log("Uma inscrição nova espera o próximo valor a ser emitido")


// RxJS v6+
import { Subject } from 'rxjs';




console.log("---------Behaviour Subject----------")
console.log("Uma inscrição nova irá receber o último valor emitido")

// RxJS v6+
import { BehaviorSubject } from 'rxjs';

const behaviourSubject = new BehaviorSubject(123);
const subject = new Subject();

// two new subscribers will get initial value => output: 123, 123
behaviourSubject.subscribe(console.log);
behaviourSubject.subscribe(console.log);
subject.subscribe(console.log);
subject.subscribe(console.log);

// two subscribers will get new value => output: 456, 456
behaviourSubject.next(456);
subject.next(456);

// new subscriber will get latest value (456) => output: 456
behaviourSubject.subscribe(console.log);
subject.subscribe(console.log);

// all three subscribers will get new value => output: 789, 789, 789
behaviourSubject.next(789);
subject.next(789);

// output: 123, 123, 456, 456, 456, 789, 789, 789


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
