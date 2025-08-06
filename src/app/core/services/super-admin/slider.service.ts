import { Injectable } from '@angular/core';
import { Slider } from '../../models/super-admin/slider';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SliderService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  getSliders(): Observable<Slider[]> {
    return this.http.get<Slider[]>(`${this.apiUrl}sliders/get-sliders`);
  }

  addSlider(slider: FormData): Observable<any> {
    return this.http.post<Slider>(`${this.apiUrl}sliders/create-slider`, slider);
  }

  updateSlider(id: number, slider: FormData): Observable<any> {
    return this.http.put<Slider>(`${this.apiUrl}sliders/update-slider/${id}`, slider);
  }

  deleteSlider(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}sliders/delete-slider/${id}`);
  }
}
