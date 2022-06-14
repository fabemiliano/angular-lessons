import { Injectable } from '@angular/core';

@Injectable()
export class ImportService {

  constructor() { }

  import() {
    console.log("Injetado com @Injectable porém no provider do módulo")
  }
}
