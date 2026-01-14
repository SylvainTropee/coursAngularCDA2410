import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-mod6demo1',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './mod6demo1.html',
  styleUrl: './mod6demo1.css',
  standalone: true
})
export class Mod6demo1 {

  public form: FormGroup

  constructor() {
    this.form = new FormGroup(
      {
        email: new FormControl(null, [Validators.email, Validators.required]),
        password: new FormControl(null, [Validators.required, Validators.pattern(/[a-z0-9]{8,}/gi)]),
        birthdate: new FormControl(null, [Validators.required, this.dateValidator]),
        newsLetter : new FormControl(true),
        job : new FormControl('dev'),
        note : new FormControl(5, [Validators.min(0), Validators.max(10)])
      }
    );
  }

  dateValidator(control: AbstractControl) {
    if (control && control.value) {
      if (new Date() < new Date(control.value)) {
        return {dateGreatherThan: true}
      }
    }
    return null;
  }

}
