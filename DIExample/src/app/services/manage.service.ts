import { Injectable } from '@angular/core';
import { AppModule } from '../app.module';
import { ManageModule } from '../manage/manage.module';

@Injectable({
  providedIn: ManageModule
})
export class ManageService {

  constructor() { }

  manage() {
    console.log("Manage foi injetado pelo providedIn no modulo")
  }
}
