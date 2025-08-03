import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/web/header/header.component';
import { FooterComponent } from '../../../shared/components/web/footer/footer.component';

@Component({
  selector: 'app-interior',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './interior.component.html',
  styleUrl: './interior.component.css'
})
export class InteriorComponent {

}
