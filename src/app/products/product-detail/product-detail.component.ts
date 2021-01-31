import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';
import {Product} from '../product.model';
import {finalize, map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );
  }

  getProduct(): Observable<Product>{
    return new Observable<Product>(subscriber => {
      subscriber.next(
        this.productService.getProduct(this.id));
    });
  }
}
