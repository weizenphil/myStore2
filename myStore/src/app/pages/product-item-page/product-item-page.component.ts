import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/Product';
import { CartService } from '../../services/cart-service.service';
import { ProductsService } from '../../services/product-service.service';

@Component({
  selector: 'app-product-item-page',
  templateUrl: './product-item-page.component.html',
  styleUrls: ['./product-item-page.component.css'],
})
export class ProductItemPageComponent implements OnInit {
  products: Product[] = [];
  product = new Product();
  id: string | null = '';

  constructor(
    private productsServices: ProductsService,
    private route: ActivatedRoute,
    private cartServices: CartService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.productsServices.getAllProducts().subscribe((allProducts) => {
      this.products = allProducts.map((product) => ({
        ...product,
        counter: 1,
      }));

      const findingProduct = this.products.find(
        (p) => p.id === Number(this.id)
      );
      if (findingProduct) {
        this.product = findingProduct;
      }
      console.log(allProducts, findingProduct);
    });
  }

  onChangeCounter(updatingCouter: string) {
    this.product.counter = Number(updatingCouter);
  }

  onAddToCart() {
    this.cartServices.addToCart(this.product);
  }
}
