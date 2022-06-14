import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage/manage.component';
import { OptionalComponent } from './optional/optional.component';
import { InternalComponent } from './internal/internal.component';
import { ExternalComponent } from './external/external.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    ManageComponent,
    OptionalComponent,
    InternalComponent,
    ExternalComponent,
  ],
  imports: [CommonModule, MatFormFieldModule, MatInputModule],
  exports: [ManageComponent],
})
export class ManageModule {}
