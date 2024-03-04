import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { ProductType } from '../interfaces/product-type.interface';

@Injectable({ providedIn: 'root' })
export class ProductTypeService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public getProductTypeList(query: string): Observable<ProductType[]> {
    return this.httpClient.get<ProductType[]>(`${this.baseUrl}/api/producttype/query?value=${query}`);
  }
}
