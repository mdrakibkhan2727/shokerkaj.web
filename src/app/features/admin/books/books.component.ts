import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-books',
  imports: [HeaderComponent,SidebarComponent,RouterLink],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

}
