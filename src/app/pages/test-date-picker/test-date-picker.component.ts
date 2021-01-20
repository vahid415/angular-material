import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-date-picker',
  templateUrl: './test-date-picker.component.html',
  styleUrls: [ './test-date-picker.component.sass' ]
})
export class TestDatePickerComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      date: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {

  }

}
