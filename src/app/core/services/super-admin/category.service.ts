import { Injectable } from '@angular/core';
import { Category } from '../../models/super-admin/category';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {

    return this.http
              .get<Category[]>(this.apiUrl + 'category/get-all-category')
              .pipe(map((response) => response))
  }
}
