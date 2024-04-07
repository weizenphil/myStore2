import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product = new Product();
  @Output() onAddingToCartEvent = new EventEmitter();

  constructor(private route: Router) {}

  ngOnInit(): void {}

  onChangeCounter(event: any) {
    this.product.counter = Number(event.target.value);
  }

  onClick(): void {
    this.route.navigate([`/products/${this.product.id}`]);
    console.log(this.product.id);
  }
}
