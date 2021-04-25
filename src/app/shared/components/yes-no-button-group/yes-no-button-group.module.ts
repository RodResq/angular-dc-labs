import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoButtonGroupComponent } from './yes-no-button-group.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [YesNoButtonGroupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ YesNoButtonGroupComponent ]
})
export class YesNoButtonGroupModule { }
