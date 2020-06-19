import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-start',
  templateUrl: './product-start.component.html',
  styleUrls: ['./product-start.component.css']
})
export class ProductStartComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onViewProduct() {
    this.router.navigate(['products/shop/1']);
  }

  onViewAllProducts() {
    this.router.navigate(['products/shop']);
  }
}
