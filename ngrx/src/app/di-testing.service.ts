import { Injectable } from '@angular/core';
import { DiWithDependencyService } from './di-with-dependency.service';

@Injectable()
export class DiTestingService {

  // constructor() { }
  constructor(private diWithDependencyService: DiWithDependencyService) { }

  testDependecy() {
    console.log("DiTestingService")
  }

  testSecondDependency() {
    this.diWithDependencyService.showDependency()
  }
}

