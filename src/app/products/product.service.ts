import {Injectable} from '@angular/core';
import {Product} from './product.model';

@Injectable({providedIn: 'root'})
export class ProductService {


  private products: Product[] = [];
  constructor() {}

  setProducts(products: Product[]) {
    this.products = products;
  }

  getProducts() {
    return this.products.slice();
  }

  getProduct(index: number) {
    return this.products[index];
  }
}
