import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Product} from './product.model';
import {DataStorageService} from '../shared/services/data-storage.service';
import {Observable} from 'rxjs';
import {ProductService} from './product.service';

@Injectable({providedIn: 'root'})
export class ProductResolverService implements Resolve<Product[]>{

  constructor(private dataStorageService: DataStorageService,
              private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Product[]> | Promise<Product[]> | Product[] {
    const products = this.productService.getProducts();
    return (products.length === 0) ? this.dataStorageService.getProducts() : products;
  }

}
