import { Component, EventEmitter, Output } from '@angular/core';

import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductSearch } from '../../interfaces/product-search.interface';
import { DatePipe } from '@angular/common';
import { DateAdapter } from '@angular/material/core';
import { ProductType } from '../../../product-type/interfaces/product-type.interface';

@Component({
  selector: 'app-product-search-mult',
  templateUrl: './product-search-mult.component.html',
})
export class ProductSearchMultComponent {

  public productSelected!: Product;
  public datePipe = new DatePipe('en-US');
  @Output()
  public productSelectedEventEmitter = new EventEmitter<Product>();

  public products: Product[] = [];
  public productForm = new FormGroup({
    name: new FormControl<string>(''),
    price: new FormControl<number>(0),
    startAmount: new FormControl<number>(0),
    finalAmount: new FormControl<number>(0),
    startDate: new FormControl<string>(''),
    finalDate: new FormControl<string>(''),
    idProductType: new FormControl<number>(0),
  });

  constructor(
    private productService: ProductService,
    private dateAdapter: DateAdapter<Date>,
  ) {
    this.dateAdapter.setLocale('Es');
  }

  get currentProduct(): ProductSearch {
    const product = this.productForm.value as ProductSearch;
    return product;
  }

  public getFormatedDate(date: string | null | undefined): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd')!;
  }

  private formatDates(): void {
    const fechaInicio = this.productForm.get('startDate')?.value;
    if (fechaInicio)
      this.productForm.get('startDate')?.setValue(this.getFormatedDate(fechaInicio));
    const fechaFinal = this.productForm.get('finalDate')?.value;
    if (fechaFinal)
      this.productForm.get('finalDate')?.setValue(this.getFormatedDate(fechaFinal));
  }

  public onSumit(): void {
    this.products = [];
    this.formatDates();
    this.productService
      .getProductSearchMulti(this.currentProduct)
      .subscribe((values: Product[]) => {
        if (values) {
          this.products = values;
        }
      });
  }

  public productEventEmitter(event: Product): void {
    this.productSelected = event;
    this.productSelectedEventEmitter.emit(this.productSelected);
  }

  public productTypeSelectedEventEmitter(event: ProductType) {
    this.productForm.get('idProductType')?.setValue(event.id);
  }
}

