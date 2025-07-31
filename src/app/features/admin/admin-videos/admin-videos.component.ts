import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-admin-videos',
  imports: [HeaderComponent,SidebarComponent,RouterLink],
  templateUrl: './admin-videos.component.html',
  styleUrl: './admin-videos.component.css'
})
export class AdminVideosComponent {

}
