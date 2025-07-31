import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessmanExperienceComponent } from './businessman-experience.component';

describe('BusinessmanExperienceComponent', () => {
  let component: BusinessmanExperienceComponent;
  let fixture: ComponentFixture<BusinessmanExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessmanExperienceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessmanExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
