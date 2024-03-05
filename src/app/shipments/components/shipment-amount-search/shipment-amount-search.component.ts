import { Component, EventEmitter, Output } from '@angular/core';
import { DeliveryService } from '../../services/delivery.service';

@Component({
  selector: 'app-shipment-amount-search',
  templateUrl: './shipment-amount-search.component.html',
  styles: ``
})
export class ShipmentAmountSearchComponent {

  @Output()
  public amountSelectedEventEmitter = new EventEmitter<number>();
  public amounts: number[] = [];
  public selectedAmount?: number;

  constructor(private deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.deliveryService
      .getAmountAll()
      .subscribe(amounts => {
        if (amounts) {
          this.amounts = amounts;
        }
      });
  }

  public onSelectedAmount(): void {
    this.amountSelectedEventEmitter.emit(this.selectedAmount);
  }
}
