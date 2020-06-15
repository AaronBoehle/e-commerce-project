import { Component, OnInit } from '@angular/core';
import {Product} from '../product.model';
import {ProductService} from '../product.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Observable<Product>;
  id: number;
  inStock: Observable<boolean>;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );
    this.getProduct();
  }

  getProduct(){
    this.product =  new Observable(subscriber => {
      subscriber.next(
        this.productService.getProduct(this.id));
    });
  }
}
