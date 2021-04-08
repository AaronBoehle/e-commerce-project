import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductStartComponent } from './product-start.component';
import {RouterTestingModule} from '@angular/router/testing';
import {RouterModule} from '@angular/router';

describe('ProductStartComponent', () => {
  let component: ProductStartComponent;
  let fixture: ComponentFixture<ProductStartComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [ ProductStartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
