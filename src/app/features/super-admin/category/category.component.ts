import { Component,OnInit,inject } from '@angular/core';
import { SidebarComponent } from '../../../shared/components/admin/sidebar/sidebar.component';
import { CategoryService } from '../../../core/services/super-admin/category.service';
import { Category } from '../../../core/models/super-admin/category';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-category',
  imports: [CommonModule,SidebarComponent,ReactiveFormsModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit  {
  private categoryService = inject(CategoryService);

  categoryForm: FormGroup;
  categories: Category[] = [];
  loading = false;
  editingId: number | null = null;
  isEditMode: boolean = false;

  ngOnInit(): void {
    this.loadCategory();
  }

  constructor(private fb: FormBuilder) {
    this.categoryForm = this.fb.group({
      name: ['', Validators.required],
      status: ['Active', Validators.required],
      imageUrl: [null],
    });
  }

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

onSubmit() {
  if (this.categoryForm.invalid) return;

  const formData = new FormData();
  formData.append('name', this.categoryForm.get('name')?.value);
  const statusValue: boolean = this.categoryForm.get('status')?.value;
  formData.append('status', statusValue.toString());
  const file = this.categoryForm.get('imageUrl')?.value;
  if (file) {
    formData.append('imageUrl', file);
  }

  if (this.editingId !== null) {
    this.categoryService.updateCategory(this.editingId, formData).subscribe({
      next: (updatedCategory) => {
        const index = this.categories.findIndex(s => s.id === this.editingId);
        if (index !== -1) this.categories[index] = updatedCategory;
        this.resetForm();
      },
      error: (err) => console.error('Update failed', err)
    });
  } else {
    this.categoryService.addCategory(formData).subscribe({
      next: (newCategory) => {
        this.categories.push(newCategory);
        this.resetForm();
      },
      error: (err) => console.error('Create failed', err)
    });
  }
}

  editSlider(category: Category) {
    this.isEditMode = true;
    this.editingId = category.id ?? null;
    this.categoryForm.patchValue({
      name: category.name,
      status: category.status,
      imageUrl: null
    });
  }

  deleteSlider(id: number) {
    if (confirm('Are you sure you want to delete this slider?')) {
      this.categoryService.deleteCategory(id).subscribe({
        next: () => {
          this.categories = this.categories.filter(s => s.id !== id);
          if (this.editingId === id) this.resetForm();
        },
        error: (err) => console.error('Delete failed', err)
      });
    }
  }

  resetForm() {
    this.isEditMode = false;
    this.editingId = null;
    this.categoryForm.reset({ status: 'Active' });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.categoryForm.patchValue({ imageUrl: file });
      this.categoryForm.get('imageUrl')?.updateValueAndValidity();
    }
  }

}
