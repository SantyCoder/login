import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Validate
import { ValidateComponent } from './validate.component';

@NgModule({
  declarations: [ValidateComponent],
  imports: [
    CommonModule
  ],
  exports:[ValidateComponent]
})
export class ValidateModule { }
