import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { Shipments } from '../../shipments/interfaces/shipment.interface';

@Injectable({ providedIn: 'root' })
export class ShipSearchService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public getShipList(query: string): Observable<Shipments[]> {
    return this.httpClient.get<Shipments[]>(`${this.baseUrl}/api/ship/query?value=${query}`);
  }
}
