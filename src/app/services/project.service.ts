import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'http://localhost:8080/api/projects';  // Adjust the URL to your API endpoint

  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);  // Make the GET request to fetch projects
  }
  deleteProject(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
