import { Component, OnInit } from '@angular/core';
import { CartItem, CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.less']
})
export class CheckoutComponent implements OnInit {

  public cartItems: CartItem[];
  public costLabel = "Total coast:";
  public totalCost: number;

  constructor(private cartService: CartService) { }

  public ngOnInit(): void {
    const cart = this.cartService.cart;
    this.cartItems = cart.cartItems;
    this.totalCost = cart.totalSum;
  }

  public resetCartData():void {
    this.cartItems = [];
    this.totalCost = 0;
  }
}
