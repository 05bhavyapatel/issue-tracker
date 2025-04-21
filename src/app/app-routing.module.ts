import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { AdminProjectComponent } from './admin/admin-project/admin-project.component';
import { PmComponent } from './pm/pm.component';
import { PmCreateProjectComponent } from './pm/pm-create-project/pm-create-project.component';
import { PmTrackIssuesComponent } from './pm/pm-track-issues/pm-track-issues.component';
import { UserPanelComponent } from './user/user-panel/user-panel.component';
import { DeveloperAssignedIssuesComponent } from './user/developer-assigned-issues/developer-assigned-issues.component';
import { TesterVerifyIssuesComponent } from './user/user-panel/tester-verify-issues/tester-verify-issues.component';
import { LogIssueComponent } from './user/user-panel/log-issue/log-issue.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'home', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-user', component: AdminUserComponent },
  { path: 'admin-project', component: AdminProjectComponent },
  { path: 'admin/users', component: AdminUserComponent },
  { path: 'pm', component: PmComponent},
  { path: 'pm-create-project', component: PmCreateProjectComponent },
  { path: 'pm-track-issues', component: PmTrackIssuesComponent },
  { path: 'user-panel/:role', component: UserPanelComponent },
  { path: 'developer-assigned-issues', component: DeveloperAssignedIssuesComponent },
  { path: 'tester-verify-issues', component: TesterVerifyIssuesComponent},
  { path: 'log-issue', component: LogIssueComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' } // default it's redirect
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }