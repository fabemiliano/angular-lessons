import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainFormComponent } from './forms/main-form/main-form.component';
import { SecondaryFormComponent } from './forms/secondary-form/secondary-form.component';
import { ExampleFormComponent } from './forms/example-form/example-form.component';
import { ProblemFormComponent } from './forms/problem-form/problem-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFormComponent,
    SecondaryFormComponent,
    ExampleFormComponent,
    ProblemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
