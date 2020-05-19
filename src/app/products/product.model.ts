
export class Product {
  public sku: number;
  public name: string;
  public description: string;
  public overview: string;
  public listPrice: number;
  public quantity: number;
  public imagePathUrl: string;

  constructor(sku: number, name: string, desc: string, detail: string, listPrice: number, qty: number, img: string) {
    this.sku = sku;
    this.name = name;
    this.description = desc;
    this.overview = detail;
    this.listPrice = listPrice;
    this.quantity = qty;
    this.imagePathUrl = img;
  }
}
