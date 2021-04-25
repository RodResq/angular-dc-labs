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

  public onChange = (value: string) => {};

  public onTouched = () => {};

  constructor() { }

  ngOnInit(): void {
  }

  public writeValue(value: string): void {
    this.value = value;
    this.onChange(value);
  }

  public registerOnChange(fn: (value:string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public active(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }

  public setDisabledState(isDisabled: boolean): void {
  }



}

enum YesNoButtonGroupOptions {
  YES = "yes",
  NO = "no"
}



