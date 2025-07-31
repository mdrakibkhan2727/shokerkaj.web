import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-businessman-experience',
  imports: [HeaderComponent,SidebarComponent,RouterLink],
  templateUrl: './businessman-experience.component.html',
  styleUrl: './businessman-experience.component.css'
})
export class BusinessmanExperienceComponent {

}
