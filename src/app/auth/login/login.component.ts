import { Component } from '@angular/core';
import { AuthService } from '../authservice.service';
import { Router } from '@angular/router';
import { LoginData } from '../../models/login-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginData: LoginData = { email: '', password: '' };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.loginData).subscribe(
      (response) => {
        // Assume the response contains the JWT token
        this.authService.setToken(response.token);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.errorMessage = 'Invalid credentials';
      }
    );
  }
}