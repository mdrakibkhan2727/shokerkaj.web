import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCrowdfundingPlaylistComponent } from './user-crowdfunding-playlist.component';

describe('UserCrowdfundingPlaylistComponent', () => {
  let component: UserCrowdfundingPlaylistComponent;
  let fixture: ComponentFixture<UserCrowdfundingPlaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCrowdfundingPlaylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCrowdfundingPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
