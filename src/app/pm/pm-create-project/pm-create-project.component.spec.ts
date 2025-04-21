import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmCreateProjectComponent } from './pm-create-project.component';

describe('PmCreateProjectComponent', () => {
  let component: PmCreateProjectComponent;
  let fixture: ComponentFixture<PmCreateProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PmCreateProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PmCreateProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
