import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-blogs',
  imports: [HeaderComponent,SidebarComponent,RouterLink],
  templateUrl: './admin-blogs.component.html',
  styleUrl: './admin-blogs.component.css'
})
export class AdminBlogsComponent {

}
