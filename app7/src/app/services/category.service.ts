import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../modals/i-category';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private httpClient: HttpClient) {}

  getAllCategories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(
      `${environment.baseUrl}/categories`
    );
  }
}
