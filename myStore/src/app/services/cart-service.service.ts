import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { BillingInfo } from '../models/BillingInfo';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productsInCart: Product[] = [];
  billingInfo: BillingInfo = new BillingInfo();

  constructor() {}

  getAllItemsInCart(): Product[] {
    return this.productsInCart;
  }

  addToCart(product: Product): Product[] {
    const existingProduct = this.productsInCart.find(
      (p) => p.id === product.id
    );

    if (existingProduct) {
    } else {
      this.productsInCart.push(product);
    }
    alert(`Item ${product.name} is added to cart!`);
    return this.productsInCart;
  }

  summarizeInformation(
    total: number,
    fullname: string,
    address: string,
    creditCardNumber: string
  ): void {
    this.billingInfo.total = total;
    this.billingInfo.fullname = fullname;
    this.billingInfo.address = address;
    this.billingInfo.creditCardNumber = creditCardNumber;
  }

  generateFinalResult(): BillingInfo {
    this.productsInCart = new Array();
    return this.billingInfo;
  }

  removeItem(deletingProductId: number): Product[] {
    const deletingProduct = this.productsInCart.find(
      (p) => p.id === deletingProductId
    );

    if (!deletingProduct) return this.productsInCart;

    this.productsInCart = this.productsInCart.filter(
      (product) => product.id !== deletingProductId
    );
    alert(`Item ${deletingProduct.name} is removed from cart!`);

    return this.productsInCart;
  }
}
