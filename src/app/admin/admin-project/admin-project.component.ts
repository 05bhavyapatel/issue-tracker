import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-project',
  templateUrl: './admin-project.component.html',
  styleUrls: ['./admin-project.component.css']
})
export class AdminProjectComponent implements OnInit {
  projects: any[] = [];
  loading: boolean = true;
  searchText: string = '';

  editProjectId: number | null = null;
  editedName: string = '';
  editedEndDate: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProjects();
  }
 //get all project
  getProjects(): void {
    this.http.get<any[]>('http://localhost:8080/api/projects').subscribe(
      (data) => {
        this.projects = data;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching projects', error);
        this.loading = false;
      }
    );
  }
  //delete proejct method
  deleteProject(id: number) {
    this.http.delete(`http://localhost:8080/api/projects/${id}`).subscribe(() => {
      this.getProjects();
    }, (error) => {
      console.error("Error deleting project", error);
    });
  }
  //edit a proejct detail --> title and end date
  startEdit(project: any) {
    this.editProjectId = project.id;
    this.editedName = project.name;
    this.editedEndDate = project.endDate;
  }
  //save changes after edit
  saveEdit(project: any) {
    const updatedProject = {
      name: this.editedName,
      endDate: this.editedEndDate
    };

    this.http.put(`http://localhost:8080/api/projects/${project.id}`, updatedProject).subscribe(() => {
      this.getProjects();
      this.editProjectId = null;
    }, error => {
      console.error("Error updating project", error);
    });
  }

  //click cancel to don't save
  cancelEdit() {
    this.editProjectId = null;
  }
}
