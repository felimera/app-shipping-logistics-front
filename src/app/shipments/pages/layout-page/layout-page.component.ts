import { Component } from '@angular/core';
import { Item } from '../../interfaces/item.interface';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sidebarItems: Item[] = [
    { label: 'Register', icon: 'add', url: './register' },
    { label: 'Search', icon: 'search', url: './search' },
  ]

  constructor(
    private router: Router,
    private snackbar: MatSnackBar,
  ) { }

  public onLogout(): void {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token');
      this.showSnackbar('Thank you very much for using our service.');
      setTimeout(() => {
        this.router.navigateByUrl('auth/login');
      }, 2500);
    }
  }

  public showSnackbar(message: string): void {
    this.snackbar.open(message, 'done', {
      duration: 2500,
    });
  }
}
