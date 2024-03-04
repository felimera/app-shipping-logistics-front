import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product-result-list',
  templateUrl: './product-result-list.component.html',
  styleUrl: './product-result-list.component.css'
})
export class ProductResultListComponent {

  @Input()
  public products: Product[] = [];
  @Output()
  productEventEmitter = new EventEmitter<Product>();
  public selectedProduct!: Product;

  public onCheckTime(data: Product): void {
    this.selectedProduct = data;
    this.productEventEmitter.emit(this.selectedProduct);
  }

  public isValidIcon(data: Product): boolean {
    return this.selectedProduct && data.id === this.selectedProduct.id;
  }
}
