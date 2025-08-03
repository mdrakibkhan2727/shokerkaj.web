import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtsAndPaintsComponent } from './arts-and-paints.component';

describe('ArtsAndPaintsComponent', () => {
  let component: ArtsAndPaintsComponent;
  let fixture: ComponentFixture<ArtsAndPaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtsAndPaintsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtsAndPaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
