import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user.interfaces';

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
    private userService: UserService
  ) { }

  get currentUser(): User {
    const user = this.userForm.value as User;
    return user;
  }
  public onSumit(): void {
    if (this.userForm.invalid) return;

    this.userService
      .saveUser(this.currentUser)
      .subscribe(user => {
        if (user)
          console.log({ user });
      })
  }
}
