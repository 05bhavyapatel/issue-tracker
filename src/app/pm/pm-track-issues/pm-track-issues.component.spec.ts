import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmTrackIssuesComponent } from './pm-track-issues.component';

describe('PmTrackIssuesComponent', () => {
  let component: PmTrackIssuesComponent;
  let fixture: ComponentFixture<PmTrackIssuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PmTrackIssuesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PmTrackIssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
