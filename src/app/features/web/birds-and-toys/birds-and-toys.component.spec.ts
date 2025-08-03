import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirdsAndToysComponent } from './birds-and-toys.component';

describe('BirdsAndToysComponent', () => {
  let component: BirdsAndToysComponent;
  let fixture: ComponentFixture<BirdsAndToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirdsAndToysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirdsAndToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
