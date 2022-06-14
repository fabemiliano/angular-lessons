import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RotaCComponent } from './rota-c/rota-c.component';
import { RotaDComponent } from './rota-d/rota-d.component';
import { RotaEComponent } from './rota-e/rota-e.component';


const routes: Routes = [
  {
    path: 'rotaD',
    component: RotaDComponent,
    children: [{
      path: 'rotaE',
      component: RotaEComponent,
    }]
  },
  {
    path: ':id',
    data: {teste: 'teste'},
    component: RotaCComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilhasRoutingModule {
}
