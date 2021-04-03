import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Observable} from 'rxjs';
import {Product} from '../product.model';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  addProductForm: FormGroup;
  reviewForm: FormGroup;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
      }
    );
    this.addProductForm = new FormGroup({
      quantity: new FormControl(null, Validators.required),
      addTo: new FormControl(null, Validators.required)
    });
    this.reviewForm = new FormGroup({
      rating: new FormControl(null, [
        Validators.required, Validators.min(1), Validators.max(5)
      ]),
      header: new FormControl(null, Validators.required),
      body: new FormControl(null, Validators.required),
      media: new FormControl(null)
    });
  }

  getProduct(): Observable<Product>{
    return new Observable<Product>(subscriber => {
      subscriber.next(
        this.productService.getProduct(this.id));
    });
  }
}
