import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environments } from '../../../environments/environments';
import { Product } from '../interfaces/product.interface';
import { ProductSearch } from '../interfaces/product-search.interface';

@Injectable({ providedIn: 'root' })
export class ProductService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public getProductSearchMulti(productSearch:ProductSearch  ): Observable<Product[]> {
    const params = new HttpParams()
      .set('name', productSearch.name)
      .set('price', productSearch.price)
      .set('startAmount', productSearch.startAmount)
      .set('finalAmount', productSearch.finalAmount)
      .set('startDate', productSearch.startDate)
      .set('finalDate', productSearch.finalDate)
      .set('idProductType', productSearch.idProductType);

    return this.httpClient.get<Product[]>(`${this.baseUrl}/api/product/anyfilter`, { params });
  }

  public getProductList(query: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.baseUrl}/api/product/query?value=${query}`);
  }
}
