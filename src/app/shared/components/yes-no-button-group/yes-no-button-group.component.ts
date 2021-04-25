import {Component, Input, OnInit, Output, EventEmitter, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent)
    }
  ]
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
    this.valueChange.emit(value)
  }

  public registerOnChange(fn: (value:string) => void): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
  }

  public active(value: string): void {
    this.writeValue(value);
  }



}

enum YesNoButtonGroupOptions {
  YES = "yes",
  NO = "no"
}



