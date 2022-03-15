import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {
  baseUrl: string = `http://localhost:8000`;
  users: User[] = [];

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${this.baseUrl}/users`)
  }
}
