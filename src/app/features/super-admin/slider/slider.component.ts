import { Component, OnInit,inject } from '@angular/core';
import { Slider } from '../../../core/models/super-admin/slider';
import { SliderService } from '../../../core/services/super-admin/slider.service';
import { SidebarComponent } from '../../../shared/components/admin/sidebar/sidebar.component';
@Component({
  selector: 'app-slider',
  imports: [SidebarComponent],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit {
  private sliderService = inject(SliderService);
  ngOnInit(): void {
    this.loadSlider();
  }

  sliders: Slider[] = [];

  loading = false;

  loadSlider(): void {
    this.sliderService.getSliders().subscribe({
      next: (response) => {
        this.sliders = response;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching sliders:', err);
        this.loading = false;
      }
    });
  }
}
