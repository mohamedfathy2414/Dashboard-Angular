import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { IProduct } from '../modals/i-product';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(`${environment.baseUrl}/products`);
  }

  getProductById(ID: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(
      `${environment.baseUrl}/products/${ID}`
    );
  }

  getProductByCatId(catId: number) {
    return this.httpClient.get<IProduct[]>(
      `${environment.baseUrl}/products?catId=${catId}`
    );
  }

  addNewProduct(prd: IProduct): Observable<IProduct> {
    return this.httpClient
      .post<IProduct>(`${environment.baseUrl}/products`, JSON.stringify(prd))
      .pipe(
        retry(2),
        catchError((err: HttpErrorResponse) => {
          return throwError(() => {
            return new Error('eror in add');
          });
        })
      );
  }

  deleteProduct(prd: IProduct): Observable<IProduct> {
    return this.httpClient.delete<IProduct>(
      `${environment.baseUrl}/products/${prd}`
    );
  }

  updateProduct(prd: IProduct, id: number): Observable<IProduct> {
    return this.httpClient.patch<IProduct>(
      `${environment.baseUrl}/products/${id}`,
      JSON.stringify(prd)
    );
  }
}
