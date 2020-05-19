import {Injectable} from '@angular/core';
import {Product} from './product.model';

@Injectable({providedIn: 'root'})
export class ProductService {

  // private products: Product[] = [
  //   new Product(
  //     6396098,
  //     'Apple - MacBook Pro 15.4" Display with Touch Bar - Intel Core i9 - 32GB Memory - AMD Radeon Pro 560X - 1TB SSD - Space Gray',
  //     'MacBook Pro has new ninth-generation 8-core Intel processor. Turbo Boost up to 4.8GHz. A brilliant and colorful Retina display with True Tone technology for a more true-to-life viewing experience. The latest Apple-designed keyboard. And the versatile Touch Bar for more ways to be productive. It\'s Apple\'s most powerful notebook. Pushed even further.\n',
  //     'This is where laptop details will go!',
  //     3199.99,
  //     4,
  //     'assets/img/products/apple/macbook-pro-front.jpg'
  //   ),
  //   new Product(
  //     6319333,
  //     'TCL 55" Class - LED - 4 Series - 2160p - Smart - 4K UHD TV with HDR',
  //     'Access thousands of movies and episodes from streaming channels with this 55-inch smart TV. HDR technology offers an immersive viewing experience in 4K UHD resolution, and the 120Hz CMI effective refresh rate delivers smooth, lifelike action scenes. The dual-band Wi-Fi and Ethernet ports of this TCL Roku smart TV provide versatile connectivity.',
  //     'This is where TV details will go!',
  //     299.99,
  //     0,
  //     'assets/img/products/tv/tv-front.jpg'
  //   ),
  //   new Product(
  //     8971268,
  //     'The Goonies [Blu-ray] [1985]',
  //     'Leonard Maltin wasn\'t alone when he noticed similarities between Goonies and the 1934 Our Gang comedy Mama\'s Little Pirate. Adapted by Chris Columbus from a story by Steven Spielberg, the film follows a group of misfit kids (including such second-generation Hollywoodites as Josh Brolin and Sean Astin) as they search for buried treasure in a subterranean cavern. Here they cross the path of lady criminal Mama Fratelli (Anne Ramsey) and her outlaw brood. Fortunately, the kids manage to befriend Fratelli\'s hideously deformed (but soft-hearted) son (John Matuszak), who comes to their rescue. The Spielberg influence is most pronounced in the film\'s prologue and epilogue, when the viewer is advised that the film\'s real villains are a group of "Evil Land Developers." The musical score makes excellent use of Max Steiner\'s main theme from The Adventures of Don Juan, not to mention contributions by the likes of Richard Marx and Cyndi Lauper.~Hal Erickson\n',
  //     'Commentary (with hidden video treasures) by Director Richard Donner and select Cast Members\n' +
  //     '\n' +
  //     'The Making of The Goonies Featurette\n' +
  //     '\n' +
  //     'Outtakes\n' +
  //     '\n' +
  //     'Cyndi Lauper The Goonies \'R\' Good Enough Music Video\n' +
  //     '\n' +
  //     'Theatrical Trailer',
  //     8.99,
  //     56,
  //     'assets/img/products/movies/goonies-blu-ray.jpg'
  //   ),
  //   new Product(
  //     5802007,
  //     'Philips - Hue White and Color Ambiance A19 LED Starter Kit - Multicolor',
  //     'Transform your home with this Philips Hue white and color ambiance A19 starter kit. The accompanying app lets you sync these lights to music, creating an energizing party atmosphere. Easily adjust the shades of this Philips Hue white and color ambiance starter kit to enjoy a soft glow for evening meals or a natural brightness for focused study.\n',
  //     'This is where Home details will go!',
  //     199.99,
  //     12,
  //     'assets/img/products/lighting/phillips-hue-front.jpg'
  //   )
  // ];
  private products: Product[] = [];
  constructor() {}

  setProducts(products: Product[]) {
    this.products = products;
  }

  getProducts() {
    return this.products.slice();
  }

  getProduct(index: number) {
    return this.products[index];
  }
}
