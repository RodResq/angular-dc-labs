import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {

  @Input()
  public value: string = null;

  @Input()
  public label: string = '';

  @Output()
  public valueChange = new EventEmitter<string>();

  public option = YesNoButtonGroupOptions;

  constructor() { }

  ngOnInit(): void {
  }

  public active(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }

  public registerOnChange(fn: any): void {
  }

  public registerOnTouched(fn: any): void {
  }

  public setDisabledState(isDisabled: boolean): void {
  }

  public writeValue(value: string): void {
    this.value = value;
  }



}

enum YesNoButtonGroupOptions {
  YES = "yes",
  NO = "no"
}



