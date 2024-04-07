import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { ProductItemPageComponent } from './pages/product-item-page/product-item-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListPageComponent,
  },
  {
    path: 'products',
    component: ProductListPageComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'confirmation',
    component: ConfirmationComponent,
  },
  {
    path: 'products/:id',
    component: ProductItemPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
