import { Component, OnInit, inject } from '@angular/core';
import { Slider } from '../../../core/models/super-admin/slider';
import { SliderService } from '../../../core/services/super-admin/slider.service';
import { SidebarComponent } from '../../../shared/components/admin/sidebar/sidebar.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, SidebarComponent, ReactiveFormsModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'] // correction: styleUrls not styleUrl
})
export class SliderComponent implements OnInit {
  private sliderService = inject(SliderService);
  sliderForm: FormGroup;
  sliders: Slider[] = [];
  editingId: number | null = null;
  loading = false;
  isEditMode: boolean = false;

  constructor(private fb: FormBuilder) {
    this.sliderForm = this.fb.group({
      title: ['', Validators.required],
      shortDescription: ['', Validators.required],
      status: ['Active', Validators.required],
      imageUrl: [null], // this will hold the File object
    });
  }

  ngOnInit(): void {
    this.loadSlider();
  }

  loadSlider(): void {
    this.loading = true;
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

onSubmit() {
  if (this.sliderForm.invalid) return;

  const formData = new FormData();
  formData.append('title', this.sliderForm.get('title')?.value);
  formData.append('shortDescription', this.sliderForm.get('shortDescription')?.value);

  // Convert boolean status to string before appending
  const statusValue: boolean = this.sliderForm.get('status')?.value;
  formData.append('status', statusValue.toString());

  const file = this.sliderForm.get('imageUrl')?.value;
  if (file) {
    formData.append('imageUrl', file);
  }

  if (this.editingId !== null) {
    this.sliderService.updateSlider(this.editingId, formData).subscribe({
      next: (updatedSlider) => {
        const index = this.sliders.findIndex(s => s.id === this.editingId);
        if (index !== -1) this.sliders[index] = updatedSlider;
        this.resetForm();
      },
      error: (err) => console.error('Update failed', err)
    });
  } else {
    this.sliderService.addSlider(formData).subscribe({
      next: (newSlider) => {
        this.sliders.push(newSlider);
        this.resetForm();
      },
      error: (err) => console.error('Create failed', err)
    });
  }
}

  editSlider(slider: Slider) {
    this.isEditMode = true;
    this.editingId = slider.id ?? null;
    this.sliderForm.patchValue({
      title: slider.title,
      shortDescription: slider.shortDescription,
      status: slider.status,
      imageUrl: null // Reset image input, user can choose new file if want
    });
  }

  deleteSlider(id: number) {
    if (confirm('Are you sure you want to delete this slider?')) {
      this.sliderService.deleteSlider(id).subscribe({
        next: () => {
          this.sliders = this.sliders.filter(s => s.id !== id);
          if (this.editingId === id) this.resetForm();
        },
        error: (err) => console.error('Delete failed', err)
      });
    }
  }

  resetForm() {
    this.isEditMode = false;
    this.editingId = null;
    this.sliderForm.reset({ status: 'Active' });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.sliderForm.patchValue({ imageUrl: file });
      this.sliderForm.get('imageUrl')?.updateValueAndValidity();
    }
  }
}
