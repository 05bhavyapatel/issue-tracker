import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pm-track-issues',
  templateUrl: './pm-track-issues.component.html',
  styleUrls: ['./pm-track-issues.component.css']
})
export class PmTrackIssuesComponent implements OnInit {
  issues: any[] = [];
  filteredIssues: any[] = [];

  filterStatus: string = '';
  filterPriority: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadIssues();
  }
  //fetch issue detail from backend
  loadIssues() {
    this.http.get<any[]>('http://localhost:8080/api/issues').subscribe(data => {
      this.issues = data;
      this.filteredIssues = data;
    });
  }
  //filter method on the basis of status and priority
  applyFilter() {
    this.filteredIssues = this.issues.filter(issue =>
      (this.filterStatus === '' || issue.status === this.filterStatus) &&
      (this.filterPriority === '' || issue.priority === this.filterPriority)
    );
  }
}
