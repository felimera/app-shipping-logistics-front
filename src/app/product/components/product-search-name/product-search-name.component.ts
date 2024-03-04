import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-search-name',
  templateUrl: './product-search-name.component.html',
  styles: ``
})
export class ProductSearchNameComponent {

  @Output()
  public productSelectedEventEmitter = new EventEmitter<Product>();
  public searchInput = new FormControl('');
  public products: Product[] = [];
  public selectedProduct?: Product;

  constructor(private productService: ProductService) { }

  public searchProduct(): void {
    const value: string = this.searchInput.value || '';

    this.productService
      .getProductList(value)
      .subscribe(products => this.products = products);
  }

  public onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedProduct = undefined;
      return;
    }
    const product: Product = event.option.value;
    this.searchInput.setValue(product.name);

    this.selectedProduct = product;

    this.productSelectedEventEmitter.emit(this.selectedProduct);
  }
}
