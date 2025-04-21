import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-developer-assigned-issues',
  templateUrl: './developer-assigned-issues.component.html',
  styleUrls: ['./developer-assigned-issues.component.css']
})
export class DeveloperAssignedIssuesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'description', 'projectName', 'status'];
  dataSource = new MatTableDataSource<any>();
  assigneeId = 36; 
  statusOptions: string[] = ['OPEN', 'IN_PROGRESS', 'CLOSED'];
  currentView: string = 'my';
  isLoading: boolean = false; 

  constructor(private http: HttpClient) {}
  //initialization
  ngOnInit(): void {
    this.fetchAssignedIssues();
  }
  //Fetch all issue 
  fetchAssignedIssues() {
    this.isLoading = true; // Start loading

    const url = this.currentView === 'my' ? 
                `http://localhost:8080/api/issues/assignee/${this.assigneeId}` : 
                'http://localhost:8080/api/issues'; // Fetch all issues if in "All Issues" view

    this.http.get<any[]>(url)
      .subscribe(
        data => {
          console.log(data);
          this.dataSource.data = data.map(issue => ({
            ...issue,
            projectName: issue.project ? issue.project.name : 'No Project'
          }));
          this.isLoading = false;
        },
        error => {
          console.error('Error fetching issues:', error);
          this.isLoading = false; 
        }
      );
  }
  //update status method OPEN, IN_PROGERSS, CLOSED
  updateStatus(issue: any) {
    const payload = { status: issue.status };
    this.http.put(`http://localhost:8080/api/issues/${issue.id}/status`, payload)
      .subscribe(
        updated => {
          console.log('Status updated', updated);
        },
        error => {
          console.error('Error updating status:', error);
        }
      );
  }

  switchView(view: string) {
    this.currentView = view;
    this.fetchAssignedIssues(); // Fetch data based on the selected view
  }
}

