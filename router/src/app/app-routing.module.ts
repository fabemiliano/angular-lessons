import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvoComponent } from './avo/avo.component';
import { FilhoComponent } from './filho/filho.component';
import { PaiComponent } from './pai/pai.component';

const routes: Routes = [
  {
    path: 'avo',
    component: AvoComponent,
    children: [{
      path: 'pai',
      component: PaiComponent,
      children: [{
        component: FilhoComponent,
        path: 'filho',
      }]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
