import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../../environments/environments';
import { Vehicle } from '../../vehicle/interfaces/vehicle.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class VehicleSearchService {

  private baseUrl = environments.baseUrl;

  constructor(private httpClient: HttpClient) { }

  public getVehicleList(query: string): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>(`${this.baseUrl}/api/vehicle/query?value=${query}`);
  }
}
