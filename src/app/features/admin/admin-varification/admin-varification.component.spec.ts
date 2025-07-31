import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVarificationComponent } from './admin-varification.component';

describe('AdminVarificationComponent', () => {
  let component: AdminVarificationComponent;
  let fixture: ComponentFixture<AdminVarificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminVarificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminVarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
