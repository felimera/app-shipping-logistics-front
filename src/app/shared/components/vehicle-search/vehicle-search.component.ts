import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Vehicle } from '../../../vehicle/interfaces/vehicle.interface';
import { VehicleSearchService } from '../../services/vehicle-search.service';

@Component({
  selector: 'shared-vehicle-search',
  templateUrl: './vehicle-search.component.html',
  styles: ``
})
export class VehicleSearchComponent {

  public searchInput = new FormControl('');
  public vehicles: Vehicle[] = [];
  public selectedVehicle?: Vehicle;

  constructor(private vehicleSeachService: VehicleSearchService) { }

  public searchVehicle(): void {
    const value: string = this.searchInput.value || '';

    this.vehicleSeachService
      .getVehicleList(value)
      .subscribe(vehicle => this.vehicles = vehicle);
  }

  public onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedVehicle = undefined;
      return;
    }
    const vehicle: Vehicle = event.option.value;
    this.searchInput.setValue(vehicle.licensePlate);

    this.selectedVehicle = vehicle;
  }
}
