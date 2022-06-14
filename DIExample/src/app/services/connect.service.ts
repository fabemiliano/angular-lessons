import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor() { }

  connect() {
    console.log("connect: Injetado por meio do @Injectable({providedIn: 'root'})")
  }
}
