import { Injectable } from '@angular/core';


export class CommentService {

  constructor() { }

  comment() {
    console.log("comment injetado sem o @Injectable")
  }
}
