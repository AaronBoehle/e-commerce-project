import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../product.service';
import {Product} from '../product.model';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() registryProducts: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  getProducts(): Observable<Product[]> {
    return new Observable<Product[]>(products => {
      if (typeof (this.registryProducts) !== 'undefined'
        && this.registryProducts?.length > 0) {
        products.next(this.registryProducts);
      }
      products.next(this.productService.getProducts());
    });
  }


}
