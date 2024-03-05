import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductSearchMultComponent } from './components/product-search-mult/product-search-mult.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductSearchNameComponent } from './components/product-search-name/product-search-name.component';
import { ProductResultListComponent } from './components/product-result-list/product-result-list.component';
import { ProductTypeModule } from '../product-type/product-type.module';


@NgModule({
  declarations: [
    ProductSearchMultComponent,
    ProductSearchNameComponent,
    ProductResultListComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    ProductTypeModule,
  ],
  exports:[
    ProductSearchMultComponent,
    ProductSearchNameComponent,
  ]
})
export class ProductModule { }
