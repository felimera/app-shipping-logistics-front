import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { DeliveryService } from '../../services/delivery.service';

@Component({
  selector: 'app-shipment-price-search',
  templateUrl: './shipment-price-search.component.html',
})
export class ShipmentPriceSearchComponent implements OnInit {

  @Output()
  public priceSelectedEventEmitter = new EventEmitter<number>();
  public prices: number[] = [];
  public selectedPrice?: number;

  constructor(private deliveryService: DeliveryService) { }

  ngOnInit(): void {
    this.deliveryService
      .getPriceAll()
      .subscribe(prices => {
        if (prices) {
          this.prices = prices;
        }
      });
  }

  public onSelectedPrice(): void {
    this.priceSelectedEventEmitter.emit(this.selectedPrice);
  }
}
