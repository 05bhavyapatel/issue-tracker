import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperAssignedIssuesComponent } from './developer-assigned-issues.component';

describe('DeveloperAssignedIssuesComponent', () => {
  let component: DeveloperAssignedIssuesComponent;
  let fixture: ComponentFixture<DeveloperAssignedIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeveloperAssignedIssuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeveloperAssignedIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
