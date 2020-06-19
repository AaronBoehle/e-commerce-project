import {async, ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';

import { ProductItemComponent } from './product-item.component';
import {Product} from '../../product.model';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.debugElement.componentInstance;
    component.product = new Product(123456, 'test', 'desc', 'detail', 999, 1, 'img');
    component.inStock = component.product.quantity > 0;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
