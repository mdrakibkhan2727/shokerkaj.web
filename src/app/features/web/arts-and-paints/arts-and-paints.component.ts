import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/web/header/header.component';
import { FooterComponent } from '../../../shared/components/web/footer/footer.component';

@Component({
  selector: 'app-arts-and-paints',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './arts-and-paints.component.html',
  styleUrl: './arts-and-paints.component.css'
})
export class ArtsAndPaintsComponent {

}
