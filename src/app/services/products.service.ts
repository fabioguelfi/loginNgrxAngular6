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

  public getProducts(): Observable<any> {
    const url = '/photos?_start=0&_limit=20';
    return this.http.get<Product[]>(`${this.BASE_URL}${url}`)
  }

}
