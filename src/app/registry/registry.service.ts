import {Injectable} from '@angular/core';
import {Registry} from './registry.model';
import {Product} from '../products/product.model';

@Injectable({ providedIn: 'root' })
export class RegistryService {
  private registryList: Registry[] = [];

  constructor() {}

  setRegistries(registryList: Registry[]): void {
    this.registryList = registryList;
  }

  getRegistries(): Registry[]{
    return this.registryList.slice();
  }

  getRegistryProducts(index: number): Product[]{
    return this.registryList[index].products;
  }
}
