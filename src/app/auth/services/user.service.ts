import { Injectable } from '@angular/core';
import { environments } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public saveUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.baseUrl}/signup`, user);
  }
}
