import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  email = '';
  password = '';
  role = '';

  constructor(private http: HttpClient, private router: Router) {}
  //register method 
  onRegister() {
    const payload = {
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role
    };
    console.log('Payload:', payload);

    this.http.post('http://localhost:8080/api/auth/register', payload).subscribe({
      
      next: (response: any) => {
      //  alert(response.message); // response.message 
        this.router.navigate(['/login']);
      },
      
      
      error: (error) => {
        console.error('Registration Failed:', error);
        alert('Registration failed. Try again.');
      }
    });
  }
}
