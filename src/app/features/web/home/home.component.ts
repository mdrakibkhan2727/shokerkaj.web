import { Component,inject } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/web/header/header.component';
import { FooterComponent } from '../../../shared/components/web/footer/footer.component';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../../core/services/super-admin/category.service';
import { Category } from '../../../core/models/super-admin/category';
import { SliderService } from '../../../core/services/super-admin/slider.service';
import { Slider } from '../../../core/models/super-admin/slider';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  imports: [CommonModule,HeaderComponent,FooterComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private categoryService = inject(CategoryService);
  private sliderService = inject(SliderService);

  ngOnInit(): void {
    this.loadCategory();
    this.loadSlider();
  }

  categories: Category[] = [];
  sliders: Slider[] = [];
  loading = false;

  loadCategory(): void {
    this.categoryService.getCategories().subscribe({
      next: (response) => {
        this.categories = response;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
        this.loading = false;
      }
    });
  }

categoryRouteMap: { [key: string]: string } = {
  'Birds': 'birds-and-toys',
  'Arts & Paints': 'arts-and-paints',
  'Home Decor': 'home-decor',
  'Interior': 'interior'
};

getCategoryLink(item: any): string {
  return '/' + (this.categoryRouteMap[item.name] || item.name.toLowerCase().replace(/ /g, '-'));
}

 get activeSliders() {
  return this.sliders.filter(slider => slider.status === true);
 }

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
