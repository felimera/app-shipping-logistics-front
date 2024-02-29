import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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
  ) { }

  get currentUser(): User {
    const user = this.userLoginForm.value as User;
    return user;
  }

  public onSumit(): void {
    if (this.userLoginForm.invalid) return;

    this.userService
      .postTokenUser(this.currentUser)
      .subscribe(token => {
        if (token) {
          localStorage.setItem('token', token.jwtToken);
          this.showSnackbar(`Bienvenido`);
          setTimeout(() => {
            this.router.navigateByUrl('/shipments');
          }, 2500);
        }
      })
  }

  public showSnackbar(message: string): void {
    this.snackbar.open(message, 'done', {
      duration: 2500,
    });
  }
}
