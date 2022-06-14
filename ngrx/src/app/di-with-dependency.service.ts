import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class DiWithDependencyService {

  constructor() { }

  showDependency() {
    console.log("DiWithDependencyService")
  }
}
