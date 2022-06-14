import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  nome = 'Fabiano';
  list = [ 'eu', 'vc']

  save(nome) {
    this.list.push(nome)
  }
}
