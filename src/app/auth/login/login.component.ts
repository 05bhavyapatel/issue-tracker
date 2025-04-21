import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  
  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    const loginPayload = {
      username: this.username,
      password: this.password
    };
    console.log('Payload being sent:', loginPayload);
    this.http.post<any>('http://localhost:8080/api/auth/login', loginPayload)
      .subscribe({
        next: (response) => {
          console.log('Login Success:', response);

          // Save token to localStorage
          localStorage.setItem('token', response.token);
          localStorage.setItem('role', response.role);
          // Navigate based on role
          if (response.role === 'ADMIN') {
            this.router.navigate(['/admin']);
          } else if (response.role === 'PROJECT_MANAGER') {
            this.router.navigate(['/pm']);
          } else if (response.role === 'DEVELOPER') {
            this.router.navigate(['/user-panel/developer']);
          } else if (response.role === 'TESTER') {
            this.router.navigate(['/user-panel/tester']);
          }else {
            alert(response.message); // Show backend message
          }
        },
        error: (error) => {
          alert('Invalid Username or password');
          console.error('Login Failed:', error);
        }
      });
  }
}