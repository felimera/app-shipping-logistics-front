import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { Delivery } from '../interfaces/delivery.interface';
import { Observable } from 'rxjs';
import { DeliverySearch } from '../interfaces/delivery-search.interface';

@Injectable({ providedIn: 'root' })
export class DeliveryService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public postDelivery(delivery: Delivery): Observable<Delivery> {
    return this.httpClient.post<Delivery>(`${this.baseUrl}/api/delivery`, delivery);
  }

  public getPriceAll(): Observable<number[]> {
    return this.httpClient.get<number[]>(`${this.baseUrl}/api/delivery/query/priceall`);
  }

  public getAmountAll(): Observable<number[]> {
    return this.httpClient.get<number[]>(`${this.baseUrl}/api/delivery/query/amountall`);
  }

  public getDiscountAll(): Observable<number[]> {
    return this.httpClient.get<number[]>(`${this.baseUrl}/api/delivery/query/discountall`);
  }

  public getDeliverySearch(deliverySearch: DeliverySearch): Observable<Delivery[]> {
    const params = new HttpParams()
      .set('guideNumber', deliverySearch.guideNumber)
      .set('price', deliverySearch.price)
      .set('amount', deliverySearch.amount)
      .set('discount', deliverySearch.discount)
      .set('initialDeadline', deliverySearch.initialDeadline)
      .set('finalDeadline', deliverySearch.finalDeadline)
      .set('idCustomer', deliverySearch.idCustomer)
      .set('idProduct', deliverySearch.idProduct)
      .set('idStore', deliverySearch.idStore)
      .set('idVehicle', deliverySearch.idVehicle)
      .set('idPort', deliverySearch.idPort)
      .set('idShip', deliverySearch.idShip);
    return this.httpClient.get<Delivery[]>(`${this.baseUrl}/api/delivery/query`, { params });
  }
}
