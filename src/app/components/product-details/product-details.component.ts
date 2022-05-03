import { Component, OnInit } from '@angular/core';
import {Product} from "../../interfaces/product.interface";
import {ProductService} from "../../services/product.service";
import { ActivatedRoute } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  id:number |undefined;
  ProductDetails: Product | undefined;
  product:Product|undefined;

  constructor(
    private productService:ProductService,
    private actRoute:ActivatedRoute) {

  }

  ngOnInit():void  {
    this.id = this.actRoute.snapshot.params['id'];
    if(this.id!=undefined){
      this.productService.getProductById(this.id).subscribe(resp=>this.product=resp);
    }


  }

}
