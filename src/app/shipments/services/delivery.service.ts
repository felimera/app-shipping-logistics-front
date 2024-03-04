import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { Delivery } from '../interfaces/delivery.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeliveryService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public postDelivery(delivery: Delivery): Observable<Delivery> {
    return this.httpClient.post<Delivery>(`${this.baseUrl}/api/delivery`, delivery);
  }
}
