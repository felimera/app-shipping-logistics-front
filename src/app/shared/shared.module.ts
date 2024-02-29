import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { StoreSearchComponent } from './components/store-search/store-search.component';
import { VehicleSearchComponent } from './components/vehicle-search/vehicle-search.component';
import { PortSearchComponent } from './components/port-search/port-search.component';
import { ShipSearchComponent } from './components/ship-search/ship-search.component';


@NgModule({
  declarations: [
    Error404PageComponent,
    StoreSearchComponent,
    VehicleSearchComponent,
    PortSearchComponent,
    ShipSearchComponent,
  ],
  exports: [
    Error404PageComponent,
    StoreSearchComponent,
    VehicleSearchComponent,
    PortSearchComponent,
    ShipSearchComponent,
  ]
})
export class SharedModule { }
