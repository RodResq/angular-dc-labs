import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss']
})
export class YesNoButtonGroupComponent implements OnInit {

  @Input()
  public value: string = null;

  @Input()
  public label: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  public active(value: string): void {
    this.value = value;
  }

}
