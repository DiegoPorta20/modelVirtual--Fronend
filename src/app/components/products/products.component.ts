import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../interfaces/product.interface";
import {ProductService} from "../../services/product.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  text:string|undefined;
  id: number | undefined;
  product: Product|undefined;


  constructor(private productService: ProductService
              ) {

  }

  ngOnInit() {
  }



}
