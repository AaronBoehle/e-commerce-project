import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryDetailComponent } from './registry-detail.component';

describe('RegistryDetailComponent', () => {
  let component: RegistryDetailComponent;
  let fixture: ComponentFixture<RegistryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
