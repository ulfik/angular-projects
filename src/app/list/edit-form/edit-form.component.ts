import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ListService } from '../list.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListElement } from '../listElement.model';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss'],
})
export class EditFormComponent implements OnInit {
  listForm: FormGroup;
  namePattern = '([A-Za-z ]+)';
  @Output() createdElement = new EventEmitter();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    const { name, gender, age, quote, img, id } = this.data.element;
    this.listForm = new FormGroup({
      name: new FormControl(name, [
        Validators.required,
        Validators.pattern(this.namePattern),
      ]),
      gender: new FormControl(gender),
      age: new FormControl(age, [Validators.required, this.ageRangeValidator]),
      quote: new FormControl(quote),
      img: new FormControl(img),
      id: new FormControl(id),
    });
  }

  onSubmit(): void {
    this.createdElement.emit(this.listForm.value);
  }

  ageRangeValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value < 1 ) {
      return { 'forbiddenAge': true };
    }
    return null;
  }
}
