import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-about',
  imports: [HeaderComponent,SidebarComponent,RouterLink],
  templateUrl: './admin-about.component.html',
  styleUrl: './admin-about.component.css'
})
export class AdminAboutComponent {

}
