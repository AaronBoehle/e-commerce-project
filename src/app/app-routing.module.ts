import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {ProductStartComponent} from './products/product-start/product-start.component';
import {NgModule} from '@angular/core';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ProductDetailComponent} from './products/product-detail/product-detail.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductResolverService} from './products/product-resolver.service';
import {AuthComponent} from './auth/auth.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full'},
  { path: 'products', component: ProductsComponent, children: [
      { path: '', component: ProductStartComponent },
      { path: 'shop', component: ProductListComponent, resolve: [ProductResolverService]},
      { path: 'shop/:id', component: ProductDetailComponent, resolve: [ProductResolverService]}
    ]},
  { path: 'auth', component: AuthComponent },
  { path: 'error', component: ErrorPageComponent},
  { path: '**', redirectTo: '/error'},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
