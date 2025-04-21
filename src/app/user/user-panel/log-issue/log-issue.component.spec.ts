import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogIssueComponent } from './log-issue.component';

describe('LogIssueComponent', () => {
  let component: LogIssueComponent;
  let fixture: ComponentFixture<LogIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogIssueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
