import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ContactDialogComponent } from './home/contact-dialog/contact-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminProjectComponent } from './admin/admin-project/admin-project.component';
import { AdminUserComponent } from './admin/admin-user/admin-user.component';
import { PmComponent } from './pm/pm.component';
import { PmCreateProjectComponent } from './pm/pm-create-project/pm-create-project.component';
import { PmTrackIssuesComponent } from './pm/pm-track-issues/pm-track-issues.component';
import { MatTableModule } from '@angular/material/table';
import { UserPanelComponent } from './user/user-panel/user-panel.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DeveloperAssignedIssuesComponent } from './user/developer-assigned-issues/developer-assigned-issues.component';
import { TesterVerifyIssuesComponent } from './user/user-panel/tester-verify-issues/tester-verify-issues.component';
import { LogIssueComponent } from './user/user-panel/log-issue/log-issue.component';

import { UserFilterPipe } from './pipes/user-filter.pipe';
import { ProjectFilterPipe } from './pipes/project-filter.pipe'; 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    HomeComponent,
    ContactDialogComponent,
    AdminProjectComponent,
    AdminUserComponent,
    PmComponent,
    
    PmCreateProjectComponent,
    PmTrackIssuesComponent,
    UserPanelComponent,
    DeveloperAssignedIssuesComponent,
    TesterVerifyIssuesComponent,
    LogIssueComponent,
    UserFilterPipe,
    ProjectFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule ,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatOptionModule,
    MatIconModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }