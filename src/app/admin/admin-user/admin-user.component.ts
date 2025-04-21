import { Component } from '@angular/core';
import { UserService, User } from '../../services/user.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent {
  users: User[] = [];
  showUserTable = false;
  showCreateForm = false;
  searchText: string = ''; 

  newUser: User = {
    id: undefined,
    username: '',
    email: '',
    role: '',
    password: ''
  };

  constructor(private userService: UserService) {}

  // Fetch users from backend
  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.showUserTable = true;
    });
  }
  //delete a user by userId
  deleteUser(userId: number | undefined) {
    if (userId !== undefined) {
      this.userService.deleteUser(userId).subscribe(() => {
        this.getUsers();
      });
    } else {
      alert('Invalid user ID');
    }
  }

  // Create new user
  createUser() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!this.newUser.username || !this.newUser.email || !this.newUser.role || !this.newUser.password) {
      alert("Please fill all fields.");
      return;
    }
    if (!emailRegex.test(this.newUser.email)) {
      alert("Please provide a valid email.");
      return;
    }
    this.userService.createUser(this.newUser).subscribe(() => {
      alert("User created successfully!");
      this.getUsers();
      this.showCreateForm = false;
      this.newUser = { id: undefined, username: '', email: '', role: '', password: '' };
    });
  }

  // Close table view
  closeUserTable() {
    this.showUserTable = false;
  }
}
