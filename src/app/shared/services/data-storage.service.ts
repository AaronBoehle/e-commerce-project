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
      'https://product-availability-56676.firebaseio.com/products.json'
      // 'http://localhost:8080/products'
    )
      .pipe(take(1),
        tap(products => {
          this.productService.setProducts(products);
        }));
    }

    getRegistries(param: string): Observable<Registry[]> {
      // return this.http.get<Registry[]>(
      //   `http://localhost:8080/registry/${param}`)
      return new Observable<Registry[]>(subscriber => {
        const registryList: Registry[] =  [
            new Registry('Wish List', [new Product(6396098, 'name1', 'description1', 'detail1', 100.00, 1, 'test', [])]),
            new Registry('Aaron\'s List', [new Product(6396098, 'name2', 'description2', 'detail2', 200.00, 3, 'test', [])]),
            new Registry('The Man Cave', [new Product(6396098, 'name3', 'description3', 'detail3', 300.00, 5, 'test', [])])
          ];
        subscriber.next(registryList);
      }).pipe(
        take(1),
        tap(registryList => {
          this.registryService.setRegistries(registryList);
        })
      );
    }
}
