import { Injectable } from '@angular/core';

@Injectable()
export class ExportService {

  constructor() { }

  export() {
    console.log("Injetado com @Injectable mas sem o root, porem foi passado no provider do component")
  }
}
