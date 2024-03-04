import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../product/interfaces/product.interface';
import { Store } from '../../../store/interfaces/store.interface';
import { Vehicle } from '../../../vehicle/interfaces/vehicle.interface';
import { Port } from '../../../port/interfaces/port.interface';
import { Shipments } from '../../interfaces/shipment.interface';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public deliveryForm = new FormGroup(
    {
      id: new FormControl<number>(0),
      guideNumber: new FormControl<string>('', [Validators.required]),
      price: new FormControl<number>(0, [Validators.required]),
      amount: new FormControl<number>(0, [Validators.required]),
      deadline: new FormControl<string>('', [Validators.required]),

      idCustomer: new FormControl<number>(0, [Validators.required]),
      idProduct: new FormControl<number>(0, [Validators.required]),
      idStore: new FormControl<number>(0),
      idVehicle: new FormControl<number>(0),
      idPort: new FormControl<number>(0),
      idShip: new FormControl<number>(0),
    });

  public typeDelivery: string = 'G';

  public productSelectedEventEmitter(event: Product) {
    this.deliveryForm.get('idProduct')?.setValue(event.id);
  }

  public storeSelectedEventEmitter(event: Store): void {
    if (event)
      this.deliveryForm.get('idStore')?.setValue(event.id);
  }

  public vehicleSelectedEventEmitter(event: Vehicle): void {
    if (event)
      this.deliveryForm.get('idVehicle')?.setValue(event.id);
  }

  public portSelectedEventEmitter(event: Port): void {
    if (event)
      this.deliveryForm.get('idPort')?.setValue(event.id);
  }

  public shipmentSelectEventEmitter(event: Shipments): void {
    if (event)
      this.deliveryForm.get('idShip')?.setValue(event.id);
  }

  public onSumit(): void {
    console.log('this.deliveryForm.value : ', this.deliveryForm.value);
  }
}
