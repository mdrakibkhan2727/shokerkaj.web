import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/web/header/header.component';
import { FooterComponent } from '../../../shared/components/web/footer/footer.component';

@Component({
  selector: 'app-shop',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
