import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-user-crowdfunding-playlist',
  imports: [HeaderComponent,SidebarComponent],
  templateUrl: './user-crowdfunding-playlist.component.html',
  styleUrl: './user-crowdfunding-playlist.component.css'
})
export class UserCrowdfundingPlaylistComponent {

}
