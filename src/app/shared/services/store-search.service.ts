import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { Store } from '../../store/interfaces/store.interface';

@Injectable({ providedIn: 'root' })
export class StoreSeachService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public getStoreList(query: string): Observable<Store[]> {
    return this.httpClient.get<Store[]>(`${this.baseUrl}/api/store/query?value=${query}`);
  }
}
