import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-example-form',
  templateUrl: './example-form.component.html',
  styleUrls: ['./example-form.component.scss'],
})
export class ExampleFormComponent implements OnInit {
  form!: FormGroup;
  lessons: any
  tests: any

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      lessons: this.fb.array([]),
      tests: this.fb.array([]),
    });

    this.lessons = this.form.get('lessons')
    this.tests = this.form.get('tests')
  }

  add() {
    const lessonForm = this.fb.group({
      title: [],
      level: []
    })
    this.lessons.push(lessonForm)

    this.tests.push(new FormControl('teste'))

    console.log(this.tests)

    }
}
