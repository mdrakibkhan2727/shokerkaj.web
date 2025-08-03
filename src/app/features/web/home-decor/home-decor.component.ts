import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/web/header/header.component';
import { FooterComponent } from '../../../shared/components/web/footer/footer.component';


@Component({
  selector: 'app-home-decor',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './home-decor.component.html',
  styleUrl: './home-decor.component.css'
})
export class HomeDecorComponent {

}
