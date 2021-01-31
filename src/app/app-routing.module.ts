import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {ProductStartComponent} from './products/product-start/product-start.component';
import {NgModule} from '@angular/core';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductResolverService} from './products/product-resolver.service';
import {AuthComponent} from './auth/auth.component';
import {RegistryComponent} from './registry/registry.component';
import {CartComponent} from './cart/cart.component';
import {RegistryListComponent} from './registry/registry-list/registry-list.component';
import {RegistryResolverService} from './registry/registry-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: 'products', component: ProductsComponent, children: [
      { path: '', component: ProductStartComponent },
      { path: 'shop', component: ProductListComponent, resolve: [ProductResolverService]},
      { path: 'shop/:id', component: ProductDetailComponent, resolve: [ProductResolverService]}
    ]},
  { path: 'registry', component: RegistryComponent, children: [
      { path: ':id', component: RegistryListComponent},
    ]},
  { path: 'auth', component: AuthComponent },
  { path: 'cart', component: CartComponent },
  { path: 'error', component: ErrorPageComponent},
  { path: '**', redirectTo: '/error'},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
