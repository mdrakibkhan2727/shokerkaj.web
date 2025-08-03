import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent,FooterComponent,SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
