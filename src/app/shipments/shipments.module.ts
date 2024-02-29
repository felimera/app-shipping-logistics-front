import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';

import { ShipmentsRoutingModule } from './shipments-routing.module';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';


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
  ]
})
export class ShipmentsModule { }
