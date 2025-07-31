import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { SliderComponent } from '../../super-admin/slider/slider.component';
import { CategoryComponent } from '../../super-admin/category/category.component';
@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent,SidebarComponent,FooterComponent,SliderComponent,CategoryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
