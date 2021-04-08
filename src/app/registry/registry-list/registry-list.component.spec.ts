import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegistryListComponent } from './registry-list.component';

describe('RegistryListComponent', () => {
  let component: RegistryListComponent;
  let fixture: ComponentFixture<RegistryListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
