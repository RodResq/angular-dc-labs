import {Component, Input, OnInit, Output, EventEmitter, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {UniqueIdService} from '../../services/unique-id/unique-id.service';

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
  public disabled: boolean = false;

  @Input()
  public value: string = null;

  @Input()
  public label: string = '';

  @Output()
  public valueChange = new EventEmitter<string>();

  public option = YesNoButtonGroupOptions;

  public onChange = (value: string) => {};

  public onTouched = () => {};

  public id: string = null;

  constructor(uniqueIdService: UniqueIdService) {
    this.id = uniqueIdService.generateUniqueIdPrefix('yes-no-button');
  }

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
    this.disabled = isDisabled;
  }

  public active(value: string): void {
    this.writeValue(value);
  }



}

enum YesNoButtonGroupOptions {
  YES = "yes",
  NO = "no"
}



