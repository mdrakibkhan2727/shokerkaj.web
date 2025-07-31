import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';

@Component({
  selector: 'app-profile-playlist',
  imports: [HeaderComponent,SidebarComponent],
  templateUrl: './profile-playlist.component.html',
  styleUrl: './profile-playlist.component.css'
})
export class ProfilePlaylistComponent {

}
