import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreationComponent } from './creation/creation.component';
import { ConditionalComponent } from './conditional/conditional.component';
import { CombinationComponent } from './combination/combination.component';
import { ErrorComponent } from './error/error.component';
import { MultcastComponent } from './multcast/multcast.component';
import { FilterinComponent } from './filterin/filterin.component';
import { TransformationComponent } from './transformation/transformation.component';
import { UtilityComponent } from './utility/utility.component';
import { FullListingComponent } from './full-listing/full-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    CreationComponent,
    ConditionalComponent,
    CombinationComponent,
    ErrorComponent,
    MultcastComponent,
    FilterinComponent,
    TransformationComponent,
    UtilityComponent,
    FullListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
