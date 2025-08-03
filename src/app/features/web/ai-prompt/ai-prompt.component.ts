import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/web/header/header.component';
import { FooterComponent } from '../../../shared/components/web/footer/footer.component';

@Component({
  selector: 'app-ai-prompt',
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './ai-prompt.component.html',
  styleUrl: './ai-prompt.component.css'
})
export class AiPromptComponent {

}
