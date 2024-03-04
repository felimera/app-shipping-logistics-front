import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductTypeRoutingModule } from './product-type-routing.module';
import { ProductTypeSearchNameComponent } from './components/product-type-search-name/product-type-search-name.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductTypeSearchNameComponent
  ],
  imports: [
    CommonModule,
    ProductTypeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    ProductTypeSearchNameComponent
  ]
})
export class ProductTypeModule { }
