import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Token } from '../../interfaces/token.interface';
import { Customer } from '../../interfaces/customer.interface';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  public userLoginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required])
  });

  constructor(
    private userService: UserService,
    private router: Router,
    private snackbar: MatSnackBar,
    private customerService: CustomerService,
  ) { }

  get currentUser(): User {
    const user = this.userLoginForm.value as User;
    return user;
  }

  private manageToken(token: Token): void {
    localStorage.setItem('token', token.jwtToken);
    this.showSnackbar(`Bienvenido`);
    setTimeout(() => {
      this.router.navigateByUrl('/ship');
    }, 2500);
  }

  private searchCustomerByEmail(): void {
    const email = this.userLoginForm.get('email')!.value!;
    this.customerService
      .getCustomerByEmail(email)
      .subscribe(customer => {
        if (customer) {
          localStorage.setItem('customer', JSON.stringify(customer));
        }
      })
  }

  public onSumit(): void {
    if (this.userLoginForm.invalid) return;

    this.userService
      .postTokenUser(this.currentUser)
      .subscribe(token => {
        if (token) {
          this.manageToken(token);
          this.searchCustomerByEmail();
        }
      })
  }

  public showSnackbar(message: string): void {
    this.snackbar.open(message, 'done', {
      duration: 2500,
    });
  }
}
