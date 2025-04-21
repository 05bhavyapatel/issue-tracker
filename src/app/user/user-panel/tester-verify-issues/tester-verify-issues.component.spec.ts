import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesterVerifyIssuesComponent } from './tester-verify-issues.component';

describe('TesterVerifyIssuesComponent', () => {
  let component: TesterVerifyIssuesComponent;
  let fixture: ComponentFixture<TesterVerifyIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TesterVerifyIssuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TesterVerifyIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
