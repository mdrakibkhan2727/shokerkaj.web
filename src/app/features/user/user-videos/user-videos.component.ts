import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-user-videos',
  imports: [HeaderComponent,SidebarComponent,RouterLink],
  templateUrl: './user-videos.component.html',
  styleUrl: './user-videos.component.css'
})
export class UserVideosComponent {

}
