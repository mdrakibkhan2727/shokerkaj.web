import { Injectable } from '@angular/core';
import { Category } from '../../models/super-admin/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = `${environment.apiUrl}`;
  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}category/get-categories`);
  }

  addCategory(category: FormData): Observable<any> {
    return this.http.post<Category>(`${this.apiUrl}category/create-category`, category);
  }

  updateCategory(id: number, category: FormData): Observable<any> {
    return this.http.put<Category>(`${this.apiUrl}category/update-category/${id}`, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}category/delete-category/${id}`);
  }

}
