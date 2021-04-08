import {Injectable} from '@angular/core';
import {Registry} from './registry.model';

@Injectable({ providedIn: 'root' })
export class RegistryService {
  private registryList: Registry[] = [];

  constructor() {}

  setRegistryList(registryList: Registry[]): void {
    this.registryList = registryList;
  }
  getRegistryList(): Registry[]{
    return this.registryList.slice();
  }
}
