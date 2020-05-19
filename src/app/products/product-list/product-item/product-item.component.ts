import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() productIndex: number;

  inStock: boolean;

  constructor() { }

  ngOnInit(): void {
    this.inStock = this.product.quantity > 0;
  }
}
