import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements AfterViewInit {
  role: string = '';
  showProjects = false;
  displayedColumns: string[] = ['id', 'name', 'description', 'startDate', 'endDate', 'managerName'];
  dataSource = new MatTableDataSource<any>();
  userId: number = 2;

  totalElements = 0;
  pageSize = 5;
  pageIndex = 0;
  isLoading = false;
  selectedProjectType: string = 'all';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private router: Router, private http: HttpClient) {
    const urlParts = this.router.url.split('/');
    this.role = urlParts[urlParts.length - 1];
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  navigateToProjects() {
    this.showProjects = true;
    this.fetchAllProjects(this.pageIndex, this.pageSize);
  }

  //fetch all project from backend
  fetchAllProjects(page: number, size: number) {
    this.isLoading = true;
    const params = new HttpParams()
      .set('page', page)
      .set('size', size);

    this.http.get<any>('http://localhost:8080/api/projects/paginated', { params })
      .subscribe(response => {
        this.dataSource.data = response.content;
        this.totalElements = response.totalElements;
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
      });
  }
//fetch particular project on the basis of user
  fetchMyProjects(page: number, size: number) {
    this.isLoading = true;
    const params = new HttpParams()
      .set('page', page)
      .set('size', size)
      .set('managerId', this.userId);

    this.http.get<any>('http://localhost:8080/api/projects/paginated', { params })
      .subscribe(response => {
        this.dataSource.data = response.content;
        this.totalElements = response.totalElements;
        this.isLoading = false;
      }, () => {
        this.isLoading = false;
      });
  }
  //when page change show all project
  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    if (this.selectedProjectType === 'all') {
      this.fetchAllProjects(this.pageIndex, this.pageSize);
    } else {
      this.fetchMyProjects(this.pageIndex, this.pageSize);
    }
  }
  //show option for my proejct and my proejct
  onProjectOptionChange(value: string) {
    this.selectedProjectType = value;
    this.pageIndex = 0;
    this.paginator.firstPage();

    if (value === 'all') {
      this.fetchAllProjects(this.pageIndex, this.pageSize);
    } else if (value === 'my') {
      this.fetchMyProjects(this.pageIndex, this.pageSize);
    }
  }
  //navigation method's
  navigateToAssignedIssues() {
    this.router.navigate(['/developer-assigned-issues']);
  }

  navigateToLogIssue() {
    this.router.navigate(['/tester-issues']);
  }

  navigateToVerifyIssues() {
    this.router.navigate(['/tester-verify-issues']);
  }
  

  navigateToDeveloper() {
    this.router.navigate(['/user-panel/developer']);
  }
}
