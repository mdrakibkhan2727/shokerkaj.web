import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-crowdfunding',
  imports: [HeaderComponent,SidebarComponent,RouterLink],
  templateUrl: './crowdfunding.component.html',
  styleUrl: './crowdfunding.component.css'
})
export class CrowdfundingComponent {

}
