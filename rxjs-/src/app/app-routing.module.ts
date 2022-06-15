import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CombinationComponent } from './combination/combination.component';
import { FilterinComponent } from './filterin/filterin.component';

const routes: Routes = [
  {
    path: 'combination',
    component: CombinationComponent
  },
  {
    path: 'filtering',
    component: FilterinComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
