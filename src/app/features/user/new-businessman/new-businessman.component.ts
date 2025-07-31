import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-new-businessman',
  imports: [HeaderComponent,SidebarComponent,RouterLink],
  templateUrl: './new-businessman.component.html',
  styleUrl: './new-businessman.component.css'
})
export class NewBusinessmanComponent {

}
