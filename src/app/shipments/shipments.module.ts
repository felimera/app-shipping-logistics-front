import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';

import { ShipmentsRoutingModule } from './shipments-routing.module';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

import { SharedModule } from '../shared/shared.module';
import { ProductModule } from '../product/product.module';


@NgModule({
  declarations: [
    SearchPageComponent,
    RegisterPageComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    ShipmentsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
    ProductModule
  ]
})
export class ShipmentsModule { }
