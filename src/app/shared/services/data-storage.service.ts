import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ProductService} from '../../products/product.service';
import {Product} from '../../products/product.model';
import {take, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {RegistryService} from '../../registry/registry.service';
import {Registry} from '../../registry/registry.model';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private http: HttpClient,
              private productService: ProductService,
              private registryService: RegistryService) {}

  storeProducts(): Observable<Product[]> {
    const products = this.productService.getProducts();
    return this.http.put<Product[]>(
            'https://product-availability-56676.firebaseio.com/products.json',
            {products});
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      // 'https://product-availability-56676.firebaseio.com/products.json'
      'http://localhost:8080/products'
    )
      .pipe(take(1),
        tap(products => {
          this.productService.setProducts(products);
        }));
    }

    getRegistryList(registryID: number): Observable<Registry[]> {
      // return this.http.get<Registry[]>(
      //   `http://localhost:8080/registry/${param}`)
      return new Observable<Registry[]>(subscriber => {
        const registryList: Registry[] =  [
            new Registry('Wish List', false, [
              new Product(6396098, 'Product 1', 'description1', 'detail1', 100.00, 1, 'test', []),
              new Product(6396099, 'Product 1.2', 'description1.2', 'detail1.2', 100.00, 15, 'test', []),
              new Product(6396100, 'Product 1.3', 'description1.3', 'detail1.3', 100.00, 34, 'test', [])
            ]),
            new Registry('Aaron\'s List', true, [
              new Product(6396098, 'Product 2', 'description2', 'detail2', 200.00, 3, 'test', [])
            ]),
            new Registry('The Man Cave', false, [
              new Product(6396098, 'Product 3', 'description3', 'detail3', 300.00, 5, 'test', [])
            ])
          ];
        subscriber.next(registryList);
      }).pipe(
        take(1),
        tap(registryList => {
          this.registryService.setRegistryList(registryList);
        })
      );
    }
}
