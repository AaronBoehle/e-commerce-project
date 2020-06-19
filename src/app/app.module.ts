import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HeaderComponent} from './header/header.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ProductsComponent} from './products/products.component';
import {ProductStartComponent} from './products/product-start/product-start.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import {AuthInterceptorService} from './auth/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    HeaderComponent,
    ProductsComponent,
    ProductStartComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
