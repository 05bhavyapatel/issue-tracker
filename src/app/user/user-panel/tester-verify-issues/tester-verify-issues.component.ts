import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tester-verify-issues',
  templateUrl: './tester-verify-issues.component.html',
  styleUrls: ['./tester-verify-issues.component.css']
})
export class TesterVerifyIssuesComponent implements OnInit {

  issues: any[] = [];
  filteredIssues: any[] = [];
  filterStatus: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadIssues();
  }
  //load all issue from backend
  loadIssues() {
    this.http.get<any[]>('http://localhost:8080/api/issues')
      .subscribe({
        next: (data) => {
          this.issues = data;
          this.filteredIssues = [...this.issues]; // initialize filtered list
        },
        error: (error) => {
          console.error('Failed to load issues:', error);
        }
      });
  }
  //apply filter on the basis of status
  applyFilter() {
    if (this.filterStatus) {
      this.filteredIssues = this.issues.filter(issue => issue.status === this.filterStatus);
    } else {
      this.filteredIssues = [...this.issues];
    }
  }
}