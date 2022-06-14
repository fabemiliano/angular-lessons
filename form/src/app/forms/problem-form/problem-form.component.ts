import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-problem-form',
  templateUrl: './problem-form.component.html',
  styleUrls: ['./problem-form.component.scss'],
})
export class ProblemFormComponent implements OnInit {
  problemForm!: FormGroup;
  arr: any[] = [];
  show = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.problemForm = this.fb.group({
      problema1: ['', Validators.required],
      problema2: [],
    });
  }

  adicionar() {
    if (!this.arr.length) {
      this.arr.push(0, 1, 2)
      this.show = true

      this.arr.forEach(e => {
        this.problemForm.setControl(e, new FormControl('', Validators.required))
      })
    }
    console.log(this.problemForm)
  }
  // ngOnInit(): void {
  //   this.problemForm = this.fb.group({
  //     problema1: ['', Validators.required],
  //     problema2: [],
  //     extras: this.fb.group({})
  //   });
  // }

  // adicionar() {
  //   if (!this.arr.length) {
  //     this.arr.push(0, 1, 2)
  //     this.show = true
  //     const teste  = this.problemForm.controls['extras'] as FormGroup
  //     this.arr.forEach(e => {
  //       teste.addControl(e, new FormControl('', Validators.required))
  //     })
  //   }
  //   console.log(this.problemForm)
  // }
}
