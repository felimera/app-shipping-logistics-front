import { Component, Input } from '@angular/core';
import { Delivery } from '../../interfaces/delivery.interface';

@Component({
  selector: 'app-shipment-list',
  templateUrl: './shipment-list.component.html',
  styles: 'table{width:100%}'
})
export class ShipmentListComponent {

  @Input()
  public deliveries: Delivery[] = [];
}
