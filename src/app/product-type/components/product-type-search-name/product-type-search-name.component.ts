import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { ProductType } from '../../interfaces/product-type.interface';
import { ProductTypeService } from '../../services/product-type.service';

@Component({
  selector: 'app-product-type-search-name',
  templateUrl: './product-type-search-name.component.html',
  styles: ``
})
export class ProductTypeSearchNameComponent {

  @Output()
  public productTypeSelectedEventEmitter = new EventEmitter<ProductType>();
  public searchInput = new FormControl('');
  public productTypes: ProductType[] = [];
  public selectedProductType?: ProductType;

  constructor(private productTypeService: ProductTypeService) { }

  public searchProductType(): void {
    const value: string = this.searchInput.value || '';

    this.productTypeService
      .getProductTypeList(value)
      .subscribe(productTypes => this.productTypes = productTypes);
  }

  public onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedProductType = undefined;
      return;
    }
    const productType: ProductType = event.option.value;
    this.searchInput.setValue(productType.name);

    this.selectedProductType = productType;

    this.productTypeSelectedEventEmitter.emit(this.selectedProductType);
  }
}
