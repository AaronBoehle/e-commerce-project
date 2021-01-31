import {Product} from '../products/product.model';

export class Registry {
  constructor(
    public name: string,
    public products?: Product[],
    // public registrySequence: number,
    // public isPrivate: boolean,
    // public isDefault: boolean
  ) {}
}
