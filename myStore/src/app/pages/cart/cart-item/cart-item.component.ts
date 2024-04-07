import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../models/Product';
import { CartService } from '../../../services/cart-service.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() product = new Product();
  @Output() adjustCartItemEvent = new EventEmitter();
  currentCounter: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.currentCounter = this.product.counter || 0;
  }

  onCounterChange(event: any): void {
    this.product.counter = Number(event?.target.value);
    this.adjustCartItemEvent.emit(this.product.id);
  }
}
