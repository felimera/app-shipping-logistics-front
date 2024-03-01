import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { environments } from '../../../environments/environments';

import { User } from '../interfaces/user.interface';
import { Message } from '../interfaces/message.interface';
import { Token } from '../interfaces/token.interface'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public saveUser(user: User): Observable<Message> {
    return this.httpClient.post<Message>(`${this.baseUrl}/signup`, user);
  }

  public postTokenUser(user: User): Observable<Token> {
    return this.httpClient.post<Token>(`${this.baseUrl}/login`, user);
  }
}
