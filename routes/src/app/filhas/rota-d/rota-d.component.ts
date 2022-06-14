import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-rota-d',
  templateUrl: './rota-d.component.html',
  styleUrls: ['./rota-d.component.scss']
})
export class RotaDComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('teste')
  }

}
