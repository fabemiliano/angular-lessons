import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionalService {

  constructor() { }

  optional() {
    console.log('optional')
  }
}
