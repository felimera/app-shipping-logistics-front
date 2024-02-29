import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public deliveryForm = new FormGroup(
    {
      id: new FormControl<number>(0),
      guideNumber: new FormControl<string>('', [Validators.required]),
      price: new FormControl<number>(0, [Validators.required]),
      amount: new FormControl<number>(0, [Validators.required]),
      deadline: new FormControl<string>('', [Validators.required]),
    }
  );

  public typeDelivery:string='G';
}
