import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
})
export class MainFormComponent implements OnInit {
  form!: FormGroup;
  telefones: number[] = [];
  subform!: FormArray;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      idade: ['', Validators.maxLength(2)],
      profissao: [],
      endereco: this.fb.group({
        rua: ['', Validators.required],
        numero: [],
      }),
      marriage: [],
      birth: [],
    });

    this.form.valueChanges.subscribe((data: FormGroup) =>
      console.log(data.value)
    );
  }


}
