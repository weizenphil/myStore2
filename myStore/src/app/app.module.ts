import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header/header.component';
import { ProductListPageComponent } from './pages/product-list-page/product-list-page.component';
import { ProductItemPageComponent } from './pages/product-item-page/product-item-page.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartItemComponent } from './pages/cart/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListPageComponent,
    ProductItemPageComponent,
    ConfirmationComponent,
    CheckoutFormComponent,
    ProductItemComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
