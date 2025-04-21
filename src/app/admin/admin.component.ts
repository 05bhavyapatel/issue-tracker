import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  users: User[] = [];
  loading: boolean = true;  // To control loading state
  displayedColumns: string[] = ['username', 'email', 'role'];  // Columns to display in the table

  searchText: string = '';       
  selectedRole: string = '';    

  sortAscending: boolean = true;  
  groupedUsers: { [key: string]: User[] } = {};  
  isGrouped: boolean = false;    

  constructor(private userService: UserService) {}
  //initialization
  ngOnInit(): void {
    this.getUsers();  
  }

  //get user details
  getUsers(): void {
    this.loading = true;  
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.loading = false;
    });
  }

  // Method to sort users by their username
  sortByName(): void {
    this.users.sort((a, b) => {
      const nameA = a.username.toLowerCase();
      const nameB = b.username.toLowerCase();
      return this.sortAscending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
    });
    this.sortAscending = !this.sortAscending; // Toggle sort direction
  }

  //sort by user role
  sortByRole(): void {
    this.users.sort((a, b) => {
      const roleA = a.role.toLowerCase();
      const roleB = b.role.toLowerCase();
      return this.sortAscending ? roleA.localeCompare(roleB) : roleB.localeCompare(roleA);
    });
    this.sortAscending = !this.sortAscending; 
  }

  //sort by user email
  sortByEmail(): void {
    this.users.sort((a, b) => {
      const emailA = a.email.toLowerCase();
      const emailB = b.email.toLowerCase();
      return this.sortAscending ? emailA.localeCompare(emailB) : emailB.localeCompare(emailA);
    });
    this.sortAscending = !this.sortAscending; 
  }

  //show option to sort
  sortBy(field: string) {
    if (field === 'role') {
      this.users.sort((a, b) => a.role.localeCompare(b.role));
    } else if (field === 'name') {
      this.users.sort((a, b) => a.username.localeCompare(b.username));
    } else if (field === 'email') {
      this.users.sort((a, b) => a.email.localeCompare(b.email));
    }
  }
  
}
