import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart-service.service';
import { ProductsService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-page.component.html',
  styleUrls: ['./product-list-page.component.css'],
})
export class ProductListPageComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productsServices: ProductsService,
    private cartServices: CartService
  ) {}

  ngOnInit(): void {
    let allProducts: Product[] = [];
    this.productsServices.getAllProducts().subscribe((data) => {
      allProducts = data;
      console.log({ allProducts, data });

      const productListWithCounters = allProducts.map((product) => ({
        ...product,
        counter: 1,
      }));
      this.products = productListWithCounters;
    });
  }

  onAddToCart(product: Product) {
    this.cartServices.addToCart(product);
  }
}
