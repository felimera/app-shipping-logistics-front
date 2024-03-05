import { Component } from '@angular/core';
import { Shipments } from '../../interfaces/shipment.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { from } from 'rxjs';
import { Product } from '../../../product/interfaces/product.interface';
import { Port } from '../../../port/interfaces/port.interface';
import { Store } from '../../../store/interfaces/store.interface';
import { Vehicle } from '../../../vehicle/interfaces/vehicle.interface';
import { DeliverySearch } from '../../interfaces/delivery-search.interface';
import { DeliveryService } from '../../services/delivery.service';
import { Delivery } from '../../interfaces/delivery.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {

  public deliveries: Delivery[] = [];
  public deliverySearchForm = new FormGroup({
    guideNumber: new FormControl<string>(''),
    price: new FormControl<number>(0),
    amount: new FormControl<number>(0),
    discount: new FormControl<number>(0),
    initialDeadline: new FormControl<string>(''),
    finalDeadline: new FormControl<string>(''),
    idCustomer: new FormControl<number>(0),
    idProduct: new FormControl<number>(0),
    idStore: new FormControl<number>(0),
    idVehicle: new FormControl<number>(0),
    idPort: new FormControl<number>(0),
    idShip: new FormControl<number>(0),
  });

  constructor(
    private deliveryService: DeliveryService
  ) { }

  public productSelectedEventEmitter(event: Product): void {
    this.deliverySearchForm.get('idProduct')?.setValue(event.id);
  }

  public portSelectedEventEmitter(event: Port): void {
    this.deliverySearchForm.get('idPort')?.setValue(event.id);
  }

  public shipmentSelectEventEmitter(event: Shipments) {
    this.deliverySearchForm.get('idShip')?.setValue(event.id);
  }

  public storeSelectedEventEmitter(event: Store) {
    this.deliverySearchForm.get('idStore')?.setValue(event.id);
  }

  public vehicleSelectedEventEmitter(event: Vehicle) {
    this.deliverySearchForm.get('idVehicle')?.setValue(event.id);
  }

  public priceSelectedEventEmitter(event: number) {
    this.deliverySearchForm.get('price')?.setValue(event);
  }

  public amountSelectedEventEmitter(event: number) {
    this.deliverySearchForm.get('amount')?.setValue(event);
  }

  public discountSelectedEventEmitter(event: number) {
    this.deliverySearchForm.get('discount')?.setValue(event);
  }

  get currentDeliverySearch(): DeliverySearch {
    const deliverySearch = this.deliverySearchForm.value as DeliverySearch
    return deliverySearch;
  }

  public onSumit(): void {

    this.deliveryService
      .getDeliverySearch(this.currentDeliverySearch)
      .subscribe(deliveries => {
        if (deliveries) {
          this.deliveries = deliveries;
        }
      });
  }
}
