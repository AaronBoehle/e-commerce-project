import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../product.model';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() productIndex: number;


  constructor() { }

  ngOnInit(): void {
  }

  stockStatus() {
    return of( this.product.quantity > 0);
  }
}
