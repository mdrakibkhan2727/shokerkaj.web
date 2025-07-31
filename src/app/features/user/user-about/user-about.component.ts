import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-about',
  imports: [HeaderComponent,SidebarComponent,RouterLink],
  templateUrl: './user-about.component.html',
  styleUrl: './user-about.component.css'
})
export class UserAboutComponent {

}
