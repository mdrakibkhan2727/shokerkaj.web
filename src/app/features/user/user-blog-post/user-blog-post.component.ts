import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-user-blog-post',
  imports: [HeaderComponent,SidebarComponent,RouterLink],
  templateUrl: './user-blog-post.component.html',
  styleUrl: './user-blog-post.component.css'
})
export class UserBlogPostComponent {

}
