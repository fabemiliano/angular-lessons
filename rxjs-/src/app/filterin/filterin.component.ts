import { Component, OnInit } from '@angular/core';
import { filter, map, Observable } from 'rxjs';


// Filter

// nao filtra os valores dentro do resulado, mas cada valor emitido (diferente do array filter)

// no caso abaixo quando é emitido 11 o subscribe não retorna o valor 

console.log('Filter')



const observable = new Observable((subscriber) => {
  subscriber.next(10);
  subscriber.next(11);
  subscriber.next(12);
});

const observer = {
  next: (value: any) => console.log(value),
};

observable.pipe(filter((value: any) => (value % 2) === 0)).subscribe(observer)

@Component({
  selector: 'app-filterin',
  templateUrl: './filterin.component.html',
  styleUrls: ['./filterin.component.scss']
})
export class FilterinComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
