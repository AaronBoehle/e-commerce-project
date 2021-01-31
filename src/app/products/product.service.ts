import {Injectable} from '@angular/core';
import {Product} from './product.model';
@Injectable({providedIn: 'root'})
export class ProductService {
  private products: Product[] = [];

  constructor() {}

  setProducts(products: Product[]): void {
    this.products = products;
  }

  getProducts(): Product[] {
    return this.products.slice();
  }

  getProduct(index: number): Product {
    return this.products[index];
  }
}
