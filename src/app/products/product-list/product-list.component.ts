import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  getProducts(): Observable<Product[]> {
    return new Observable<Product[]>(products => {
      products.next(this.productService.getProducts());
    });
  }


}
