import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserIdeaShareComponent } from './user-idea-share.component';

describe('UserIdeaShareComponent', () => {
  let component: UserIdeaShareComponent;
  let fixture: ComponentFixture<UserIdeaShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserIdeaShareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserIdeaShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
