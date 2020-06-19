import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ProductService} from '../../products/product.service';
import {Product} from '../../products/product.model';
import {exhaustMap, map, take, tap} from 'rxjs/operators';
import {AuthService} from '../../auth/auth.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private http: HttpClient,
              private productService: ProductService,
              private authService: AuthService) {}

  storeProducts() {
    const products = this.productService.getProducts();
    return this.http.put<Product[]>(
            'https://product-availability-56676.firebaseio.com/products.json',
            {products});
  }

  getProducts() {
    return this.http.get<Product[]>(
      'https://product-availability-56676.firebaseio.com/products.json')
      .pipe(
        tap(products => {
          this.productService.setProducts(products);
        }));
    }
}
