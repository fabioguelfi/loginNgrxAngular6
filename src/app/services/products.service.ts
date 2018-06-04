import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private BASE_URL = 'https://jsonplaceholder.typicode.com'

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(start: number = 0, end: number = 10): Observable<any> {
    const url = `/photos?_start=${start}&_end=${end}`;
    return this.http.get<Product[]>(`${this.BASE_URL}${url}`)
  }

}
