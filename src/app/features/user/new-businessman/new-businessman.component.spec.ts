import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBusinessmanComponent } from './new-businessman.component';

describe('NewBusinessmanComponent', () => {
  let component: NewBusinessmanComponent;
  let fixture: ComponentFixture<NewBusinessmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewBusinessmanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBusinessmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
