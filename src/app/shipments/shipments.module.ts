import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShipmentsRoutingModule } from './shipments-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';


@NgModule({
  declarations: [
    RegisterComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    ShipmentsRoutingModule
  ]
})
export class ShipmentsModule { }
