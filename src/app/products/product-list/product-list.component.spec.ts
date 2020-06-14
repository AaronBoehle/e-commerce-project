import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListComponent } from './product-list.component';
import {ProductsComponent} from '../products.component';
import {ProductService} from '../product.service';
import {DataStorageService} from '../../shared/services/data-storage.service';
import {RouterTestingModule} from '@angular/router/testing';

describe('ProductListComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productService: ProductService;
  let compiled: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.debugElement.componentInstance;
    productService = fixture.debugElement.injector.get(ProductService);
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
