import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';
import {FormsModule, NgForm} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      declarations: [ AuthComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
