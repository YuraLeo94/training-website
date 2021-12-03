import { Component, Input, OnInit } from '@angular/core';
import { CartItem, CartService } from 'src/app/services/cart.service';
import { MAX_AMOUNT, MIN_AMOUNT } from 'src/app/shared/global.const';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.less']
})
export class ShoppingCardComponent implements OnInit {

  @Input() cartItem: CartItem;
  public prevAmout: number;
  public minAmount = MIN_AMOUNT;
  public maxAmount = MAX_AMOUNT;

  constructor(private cartService: CartService) { }

  public ngOnInit(): void {
    this.prevAmout = this.cartItem.ammount;
  }

  public onDelete(): void {
    this.cartService.removeFromCart(this.cartItem.product.id, this.productTotalSum);
  }

  private get productTotalSum(): number {
    return this.cartItem.ammount * this.cartItem.product.cost;
  }

  public onChange(): void {
    this.cartService.updateTotalSum((this.cartItem.ammount - this.prevAmout) * this.cartItem.product.cost);
    this.prevAmout = this.cartItem.ammount;
  }

}
