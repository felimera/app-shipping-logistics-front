import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Store } from '../../../store/interfaces/store.interface';
import { StoreSeachService } from '../../services/store-search.service';

@Component({
  selector: 'shared-store-search',
  templateUrl: './store-search.component.html',
  styles: ``
})
export class StoreSearchComponent {

  public searchInput = new FormControl('');
  public stores: Store[] = [];
  public selectedStore?: Store;

  constructor(private storeSeachService: StoreSeachService) { }

  public searchStore(): void {
    const value: string = this.searchInput.value || '';

    this.storeSeachService
      .getStoreList(value)
      .subscribe(stores => this.stores = stores);
  }

  public onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedStore = undefined;
      return;
    }
    const store: Store = event.option.value;
    this.searchInput.setValue(store.address);

    this.selectedStore = store;
  }
}
