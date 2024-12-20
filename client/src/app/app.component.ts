import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Work Order Management System';
  get isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
  constructor() {}
  logout() {
    localStorage.removeItem('token');
    window.location.reload();
  }
}
