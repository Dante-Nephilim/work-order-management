import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http
      .post('http://localhost:3000/api/users/login', {
        email: this.email,
        password: this.password,
      })
      .subscribe({
        next: (response: any) => {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.error = err.error.error || 'An error occurred.';
          localStorage.removeItem('token');
        },
      });
  }
}
