import { Component, OnInit } from '@angular/core';
import { Cart, CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.less']
})

export class ShoppingCartComponent implements OnInit {

  public cartData: Cart;

  constructor(private cartService: CartService) { }

  public ngOnInit(): void {
    this.cartData = this.cartService.cart;
  }

  public disableEnableCheckout(): boolean {
    let isDisableCheckoutButton = false;
    this.cartData.cartItems.forEach(element => {
      if (element.ammount === null) {
        isDisableCheckoutButton = true;
      }
    });
    return isDisableCheckoutButton;
  }
  
}
