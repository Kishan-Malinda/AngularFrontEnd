import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturerOperationsComponent } from './lecturer-operations.component';

describe('LecturerOperationsComponent', () => {
  let component: LecturerOperationsComponent;
  let fixture: ComponentFixture<LecturerOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturerOperationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LecturerOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
