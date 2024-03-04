import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../../product/interfaces/product.interface';
import { Store } from '../../../store/interfaces/store.interface';
import { Vehicle } from '../../../vehicle/interfaces/vehicle.interface';
import { Port } from '../../../port/interfaces/port.interface';
import { Shipments } from '../../interfaces/shipment.interface';
import { Customer } from '../../../auth/interfaces/customer.interface';
import { DeliveryService } from '../../services/delivery.service';
import { Delivery } from '../../interfaces/delivery.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent implements OnInit {


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

  constructor(
    private deliveryService: DeliveryService,
    private snackbar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  private getCustomer(): void {
    if (localStorage.getItem('customer')) {
      const customer: Customer = JSON.parse(localStorage.getItem('customer')!);
      this.deliveryForm.get('idCustomer')?.setValue(customer.id);
    }
  }

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

  private getCurrentDelivery(): Delivery {
    const delivery = this.deliveryForm.value as Delivery;
    return delivery;
  }

  public onSumit(): void {

    if (this.deliveryForm.invalid) return;

    this.deliveryService
      .postDelivery(this.getCurrentDelivery())
      .subscribe(delivery => {
        if (delivery)
          this.showSnackbar('Successful registration');
      });
  }

  public showSnackbar(message: string): void {
    this.snackbar.open(message, 'done', {
      duration: 2500,
    });
  }
}
