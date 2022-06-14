import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RotaAComponent } from './rota-a/rota-a.component';
import { RotaBComponent } from './rota-b/rota-b.component';
import { RotaCComponent } from './filhas/rota-c/rota-c.component';
import { RotaDComponent } from './filhas/rota-d/rota-d.component';
import { AppRouterModule } from './app.routing';
import { OutraFilhaModule } from './outra-filha/outra-filha.module';
import { FilhasModule } from './filhas/filhas.module';

@NgModule({
  declarations: [
    AppComponent,
    RotaAComponent,
    RotaBComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    OutraFilhaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
