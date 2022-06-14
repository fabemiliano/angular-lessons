import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  teste = of([1, 2, 3])

  constructor(private http: HttpClient) { }

  getCurso():Observable<number[]> {
    console.log(this.http)
    return this.teste
  }
}
