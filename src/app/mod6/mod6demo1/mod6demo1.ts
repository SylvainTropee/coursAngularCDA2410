import {Component} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-mod6demo1',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './mod6demo1.html',
  styleUrl: './mod6demo1.css',
  standalone: true
})
export class Mod6demo1 {

  public form: FormGroup
  public name? : string

  constructor() {
    this.form = new FormGroup(
      {
        email: new FormControl(null, [Validators.email, Validators.required]),
        password: new FormControl(null, [Validators.required, Validators.pattern(/[a-z0-9]{8,}/i)]),
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

  onSubmit(){
    if(this.form.valid){
      //si c'est ok je récupère les valeurs et j'envoie à un service
      console.log(this.form.value)
    }else{
      console.log("C'est pas bon")
    }
  }


  check(event : Event) {
    console.log(event)
    if(this.name?.trim().length == 0){
      console.log("Champ requis !")
    }
  }
}
