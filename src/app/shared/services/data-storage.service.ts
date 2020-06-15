import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductService} from '../../products/product.service';
import {Product} from '../../products/product.model';
import {map, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private http: HttpClient, private productService: ProductService) {}

  storeProducts() {
    const products = this.productService.getProducts();
    this.http.put<Product[]>('https://product-availability-56676.firebaseio.com/products.json', products).pipe();
  }

  getProducts() {
    return this.http.get<Product[]>('https://product-availability-56676.firebaseio.com/products.json')
      .pipe(
        tap(products => {
          this.productService.setProducts(products);
        }));
    }
}
