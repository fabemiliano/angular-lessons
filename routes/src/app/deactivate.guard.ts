import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RotaBComponent } from './rota-b/rota-b.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<RotaBComponent> {

  canDeactivate(
    component: RotaBComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log(component)
    console.log(route)
    console.log(state)
    return window.confirm("Tem certeza que deseja sair dessa página?");
  }
}
