import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart-service.service';
import { ProductsService } from '../../services/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  fullname: string = '';
  address: string = '';
  creditCardNumber: string = '';
  total: number = 0;

  constructor(private cartService: CartService, private route: Router) {}

  ngOnInit(): void {
    this.products = this.cartService.getAllItemsInCart();
    this.calculateTotal();
    // this.products = this.productService.getAllProductsthis.calculateTotal()();
  }

  onSubmit(): void {
    this.cartService.summarizeInformation(
      this.total,
      this.fullname,
      this.address,
      this.creditCardNumber
    );
    this.route.navigate(['/confirmation']);
  }

  onResetForm(): void {
    this.fullname = '';
    this.address = '';
    this.creditCardNumber = '';
  }

  onAdjustCounter(adjustingItemID: number): void {
    const deletingProduct = this.products.find((p) => p.id === adjustingItemID);

    if (!deletingProduct) return;
    if (deletingProduct.counter === 0) {
      this.products = this.cartService.removeItem(adjustingItemID);
    }

    this.calculateTotal();
  }

  calculateTotal(): void {
    let cartTotal = 0;
    this.products.forEach((product: Product) => {
      cartTotal += product.price * (product.counter ?? 0);
    });
    this.total = Number(cartTotal.toFixed(2));
  }
}
