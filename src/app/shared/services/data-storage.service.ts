import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ProductService} from '../../products/product.service';
import {Product} from '../../products/product.model';
import {tap} from 'rxjs/operators';
import {AuthService} from '../../auth/auth.service';
import {Observable} from 'rxjs';
import {RegistryService} from '../../registry/registry.service';
import {Registry} from '../../registry/registry.model';

@Injectable({providedIn: 'root'})
export class DataStorageService {

  constructor(private http: HttpClient,
              private productService: ProductService,
              private registryService: RegistryService,
              private authService: AuthService) {}

  storeProducts(): Observable<Product[]> {
    const products = this.productService.getProducts();
    return this.http.put<Product[]>(
            'https://product-availability-56676.firebaseio.com/products.json',
            {products});
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(
      'https://product-availability-56676.firebaseio.com/products.json')
      .pipe(
        tap(products => {
          this.productService.setProducts(products);
        }));
    }

    getRegistries(): Observable<Registry[]> {
    return new Observable<Registry[]>(sub  => {
      const registryList: Registry[] = [
        new Registry('Wish List', []),
              new Registry('Aaron\'s List', []),
              new Registry('The Man Cave', [])
      ];
      sub.next(registryList);
    })
      // return this.http.get<Registry[]>(
      // `http://localhost:8080/registry`)
    // return new Observable<Registry[]>(registryList => {
    //   registryList.next([
    //       new Registry('Wish List', []),
    //       new Registry('Aaron\'s List', []),
    //       new Registry('The Man Cave', [])
    //     ]);
    // })
      .pipe(
        tap(registryList => {
          console.log(registryList.length);
          this.registryService.setRegistries(registryList);
        }));
    }
}
