import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angula-dc-labs'

  public form: FormGroup = null;

  constructor(formBuilder: FormBuilder) {

    this.form = formBuilder.group({
      yesNoAnswer: [null]
    })
  }

  public submit() {
    console.log(this.form.value);
  }

}
