import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import * as data from '../../assets/data.json';


import {
  HttpClient,
  HttpClientJsonpModule,
  HttpClientModule,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(
      'http://localhost:4200/assets/data.json'
    );
  }
}
