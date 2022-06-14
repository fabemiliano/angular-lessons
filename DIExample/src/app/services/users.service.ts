import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}
  isAuthorized = true;

  getUser() {
    this.http.get('teste');
    return of('teste');
  }
}
