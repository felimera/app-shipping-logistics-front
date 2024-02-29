import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: ``
})
export class RegisterPageComponent {

  public userForm = new FormGroup({
    id: new FormControl(0),
    fullName: new FormControl<string>(''),
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
    phone: new FormControl<string>(''),
    gender: new FormControl<string>(''),
  });

  constructor(
    private userService: UserService,
    private router: Router,
    private snackbar: MatSnackBar,
  ) { }

  get currentUser(): User {
    const user = this.userForm.value as User;
    return user;
  }

  public onSumit(): void {
    if (this.userForm.invalid) return;

    this.userService
      .saveUser(this.currentUser)
      .subscribe(msg => {
        if (msg) {
          this.showSnackbar(`${this.currentUser.fullName} ${msg.message}`);
          setTimeout(() => {
            this.router.navigateByUrl('/auth/login');
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
