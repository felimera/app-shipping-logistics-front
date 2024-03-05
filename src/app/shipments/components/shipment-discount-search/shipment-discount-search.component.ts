import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DeliveryService } from '../../services/delivery.service';

@Component({
  selector: 'app-shipment-discount-search',
  templateUrl: './shipment-discount-search.component.html',
  styles: ``
})
export class ShipmentDiscountSearchComponent implements OnInit {

  @Output()
  public discountSelectedEventEmitter = new EventEmitter<number>();
  public discounts: number[] = [];
  public selectedDiscount?: number;

  constructor(private deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.deliveryService
      .getDiscountAll()
      .subscribe(discounts => {
        if (discounts) {
          this.discounts = discounts;
        }
      });
  }

  public onSelectedDiscount(): void {
    this.discountSelectedEventEmitter.emit(this.selectedDiscount);
  }
}
