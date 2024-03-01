import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Port } from '../../../port/interfaces/port.interface';
import { PortSearchService } from '../../services/port-search.service';

@Component({
  selector: 'shared-port-search',
  templateUrl: './port-search.component.html',
  styles: ``
})
export class PortSearchComponent {

  public searchInput = new FormControl('');
  public ports: Port[] = [];
  public selectedPort?: Port;

  constructor(private portSearchService: PortSearchService) { }

  public searchPort(): void {
    const value: string = this.searchInput.value || '';

    this.portSearchService
      .getPortList(value)
      .subscribe(ports => this.ports = ports);
  }

  public onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedPort = undefined;
      return;
    }
    const port: Port = event.option.value;
    this.searchInput.setValue(port.location);

    this.selectedPort = port;
  }
}
