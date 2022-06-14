import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeactivateGuard } from './deactivate.guard';
import { RotaAComponent } from './rota-a/rota-a.component';
import { RotaBComponent } from './rota-b/rota-b.component';

const routes: Routes = [
  {
    path: 'rotaA',
    component: RotaAComponent,
  },
  {
    path: 'rotaB',
    canDeactivate: [DeactivateGuard],

    component: RotaBComponent,
  },
  {
    path: 'filhas',
    loadChildren: () => import('./filhas/filhas.module').then(m => m.FilhasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule {
}
