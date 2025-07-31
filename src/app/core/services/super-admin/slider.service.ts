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

  getSliders(): Observable<any> {

    return this.http
              .get<Slider[]>(this.apiUrl + '/sliders/get-all-slider')
              .pipe(map((response) => response))
  }
}
