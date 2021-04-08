import {Product} from '../products/product.model';

export class Registry {
  constructor(
    public name: string,
    public isDefault: boolean,
    public products: Product[] = [],
    // public registrySequence: number,
    // public isPrivate: boolean,
  ) {}
}
