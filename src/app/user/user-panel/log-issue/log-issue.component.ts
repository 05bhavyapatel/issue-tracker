import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-issue',
  templateUrl: './log-issue.component.html',
  styleUrls: ['./log-issue.component.css']
})
export class LogIssueComponent {
  issueForm: FormGroup;
  apiUrl = 'http://localhost:8080/api/issues';
  developers: any[] = [];
  projects: any[] = [];
  users: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
    this.issueForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      status: ['Open', Validators.required],
      priority: ['Low', Validators.required],
      dueDate: ['', Validators.required],
      assigneeId: ['', Validators.required],
      reporterId: ['', Validators.required],
      projectId: ['', Validators.required]
    });

    this.loadDevelopers();
    this.loadProjects();
    this.loadUsers();
  }

  // Direct API call for developers
  loadDevelopers() {
    this.http.get<any[]>('http://localhost:8080/api/users/developers')
      .subscribe(data => {
        this.developers = data;
      });
  }

  // Direct API call for projects
  loadProjects() {
    this.http.get<any[]>('http://localhost:8080/api/projects')
      .subscribe(data => {
        this.projects = data;
      });
  }
  //load all user from backend
  loadUsers() {
    this.http.get<any[]>('http://localhost:8080/api/users')
      .subscribe(data => {
        this.users = data;
      });
  }

  //submit button method
  submitIssue() {
    if (this.issueForm.valid) {
      this.http.post(this.apiUrl, this.issueForm.value).subscribe({
        next: (response) => {
          console.log('Issue logged successfully', response);
          alert('Issue logged successfully!');
          this.router.navigate(['/user-panel']);
        },
        error: (error) => {
          console.error('Error logging issue', error);
          alert('Failed to log issue.');
        }
      });
    }
  }
}

