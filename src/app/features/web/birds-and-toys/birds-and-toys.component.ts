import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/web/header/header.component';
import { FooterComponent } from '../../../shared/components/web/footer/footer.component';

@Component({
  selector: 'app-birds-and-toys',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './birds-and-toys.component.html',
  styleUrl: './birds-and-toys.component.css'
})
export class BirdsAndToysComponent {

}
