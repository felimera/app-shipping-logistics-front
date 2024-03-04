import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/customer.interface';

@Injectable({ providedIn: 'root' })
export class CustomerService {

  private baseUrl: string = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public getCustomerByEmail(email: string): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.baseUrl}/api/customer/query?email=${email}`);
  }
}
