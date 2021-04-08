import { ComponentFixture, fakeAsync, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductItemComponent } from './product-item.component';
import {Product} from '../../product.model';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.debugElement.componentInstance;
    component.product = new Product(123456, 'test', 'desc', 'detail', 999, 1, 'img', []);
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
