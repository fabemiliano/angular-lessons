import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondary-form',
  templateUrl: './secondary-form.component.html',
  styleUrls: ['./secondary-form.component.scss']
})
export class SecondaryFormComponent implements OnInit {

  @Input() inputForm: any;

  constructor() { }

  ngOnInit(): void {
  }

}
