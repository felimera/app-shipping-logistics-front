import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Shipments } from '../../../shipments/interfaces/shipment.interface';
import { ShipSearchService } from '../../services/ship-search.service';

@Component({
  selector: 'shared-ship-search',
  templateUrl: './ship-search.component.html',
  styles: ``
})
export class ShipSearchComponent {

  public searchInput = new FormControl('');
  public shipments: Shipments[] = [];
  public selectedShip?: Shipments;

  constructor(private shipSearchService: ShipSearchService) { }

  public searchShip(): void {
    const value: string = this.searchInput.value || '';

    this.shipSearchService
      .getShipList(value)
      .subscribe(shipments => this.shipments = shipments);
  }

  public onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedShip = undefined;
      return;
    }
    const shipment: Shipments = event.option.value;
    this.searchInput.setValue(shipment.fleetNumber);

    this.selectedShip = shipment;
  }
}
