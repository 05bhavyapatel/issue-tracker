import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'; 
import { throwError } from 'rxjs';

export interface User {
  id: number | null | undefined;  // Allow null as well as number and undefined
  username: string;
  email: string;
  role: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${userId}`);
  }
  
  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user).pipe(
      catchError((error: any) => {  
        console.error('Error creating user', error);
        alert('Failed to create user');
        return throwError(error);  // Ensuring error is rethrown for further handling
      })
    );
  }
}
