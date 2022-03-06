
export class Product {
  public id: number;
  public name: string;
  public description: string;
  public overview: string;
  public listPrice: number;
  public quantity: number;
  public imagePathUrl: string;
  public reviews: [];

  constructor(id: number, name: string, desc: string, detail: string, listPrice: number, qty: number, img: string, reviews: []) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.overview = detail;
    this.listPrice = listPrice;
    this.quantity = qty;
    this.imagePathUrl = img;
    this.reviews = reviews;
  }
}
