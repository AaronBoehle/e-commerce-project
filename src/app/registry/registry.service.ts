import {Injectable} from '@angular/core';
import {Registry} from './registry.model';
import {Product} from '../products/product.model';

@Injectable({ providedIn: 'root' })
export class RegistryService {
  private registryList: Registry[] =
    [
    new Registry('Wish List', [new Product(123, 'test', 'test', 'test', 100.00, 1, 'test')]),
    new Registry('Aaron\'s List', []),
    new Registry('The Man Cave', [])
  ];

  constructor() {
  }

  setRegistries(registryList: Registry[]): void {
    console.log('Service' + registryList.length);
    this.registryList = registryList;
    this.registryList.forEach(x => console.log(x.name));

  }

  getRegistries(): Registry[]{
    return this.registryList.slice();
  }

  getRegistryProducts(index: number): Product[]{
    return this.registryList[index].products;
  }
}
