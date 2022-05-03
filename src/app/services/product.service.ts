import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, map } from 'rxjs/operators';
import {Product} from "../interfaces/product.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURL='http://localhost:3000/products';

  constructor(private  http: HttpClient) { }


  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.apiURL);
  }


  getProductById(id:number): Observable<Product>{
    return this.http.get<Product>(`${this.apiURL}/${id}`);
  }
}
