import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBlogPostComponent } from './user-blog-post.component';

describe('UserBlogPostComponent', () => {
  let component: UserBlogPostComponent;
  let fixture: ComponentFixture<UserBlogPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBlogPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
