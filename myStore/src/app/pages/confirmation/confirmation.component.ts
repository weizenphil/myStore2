import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BillingInfo } from '../../models/BillingInfo';
import { CartService } from '../../services/cart-service.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  billingInfo: BillingInfo = {
    total: 0,
    address: '',
    creditCardNumber: '',
    fullname: '',
  };

  constructor(private cartService: CartService, private route: Router) {}

  ngOnInit(): void {
    this.billingInfo = this.cartService.generateFinalResult();
  }

  onBack(): void {
    this.route.navigate(['']);
  }
}
