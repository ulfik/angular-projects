import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss'],
})
export class ListFormComponent implements OnInit {
  listForm: FormGroup;
  namePattern = '([A-Za-z ]+)';
  @Output() createdElement = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.listForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.namePattern),
      ]),
      gender: new FormControl('male'),
      age: new FormControl(null, [Validators.required, this.ageRangeValidator]),
      quote: new FormControl(null),
      img: new FormControl(null),
    });
  }

  onSubmit(formDirective: FormGroupDirective): void {
    const id: string = Date();
    this.createdElement.emit({ ...this.listForm.value, id });
    formDirective.resetForm();
    this.listForm.reset({ ...this.listForm, gender: 'male' });
  }

  ageRangeValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value < 1) {
      return { forbiddenAge: true };
    }
    return null;
  }
}
