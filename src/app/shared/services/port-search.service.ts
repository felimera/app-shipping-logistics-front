import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environments } from '../../../environments/environments';
import { Port } from '../../port/interfaces/port.interface';

@Injectable({ providedIn: 'root' })
export class PortSearchService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public getPortList(query: string): Observable<Port[]> {
    return this.httpClient.get<Port[]>(`${this.baseUrl}/api/port/query?value=${query}`);
  }
}
