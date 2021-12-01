import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout-product-card',
  templateUrl: './checkout-product-card.component.html',
  styleUrls: ['./checkout-product-card.component.less']
})
export class CheckoutProductCardComponent {

  @Input() cartItem: CartItem;

}
