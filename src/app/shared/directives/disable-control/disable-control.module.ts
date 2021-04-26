import {NgModule} from '@angular/core';
import {DisableControlDirective} from './disable-control.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    DisableControlDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DisableControlDirective
  ]
})
export class DisableControlModule { }
