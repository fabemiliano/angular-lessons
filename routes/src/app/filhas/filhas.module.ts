import { NgModule } from "@angular/core";
import { FilhasRoutingModule } from "./filhas.routing";
import { RotaCComponent } from "./rota-c/rota-c.component";
import { RotaDComponent } from "./rota-d/rota-d.component";
import { RotaEComponent } from './rota-e/rota-e.component';

@NgModule({
  declarations: [RotaCComponent, RotaDComponent, RotaEComponent],
  imports: [FilhasRoutingModule],
  exports: [FilhasRoutingModule]
})
export class FilhasModule {
  constructor() {
  }
}
