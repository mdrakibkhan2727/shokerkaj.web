import { Component,OnInit,inject } from '@angular/core';
import { SidebarComponent } from '../../../shared/components/admin/sidebar/sidebar.component';
import { CategoryService } from '../../../core/services/super-admin/category.service';
import { Category } from '../../../core/models/super-admin/category';
@Component({
  selector: 'app-category',
  imports: [SidebarComponent],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit  {
  private categoryService = inject(CategoryService);
  ngOnInit(): void {
    this.loadCategory();
  }

  categories: Category[] = [];
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
}
