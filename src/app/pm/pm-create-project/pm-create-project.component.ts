import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pm-create-project',
  templateUrl: './pm-create-project.component.html',
  styleUrls: ['./pm-create-project.component.css']
})
export class PmCreateProjectComponent implements OnInit {
  showForm: boolean = true;
  project = {
    name: '',
    description: '',
    startDate: '',
    endDate: '',
    managerId: ''
  };

  managers: any[] = [];  // this will hold data from backend

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Corrected backend URL
    this.http.get<any[]>('http://localhost:8080/api/users/managers').subscribe(
      (data) => {
        console.log('Fetched managers:', data);
        this.managers = data;
      },
      (error) => {
        console.error('Error fetching managers:', error);
      }
    );
  }

  createProject() {
    // Log project data before sending
    console.log('Creating project with data:', this.project);
  
    // Send POST request to backend
    this.http.post('http://localhost:8080/api/projects', this.project).subscribe(
      (response) => {
        console.log('Project created successfully:', response);
        alert('Project created successfully!');
        // Optionally reset form fields after success
        this.project = {
          name: '',
          description: '',
          startDate: '',
          endDate: '',
          managerId: ''
        };
      },
      (error) => {
        console.error('Error creating project:', error);
        alert('Failed to create project.');
      }
    );
  }
  
}
