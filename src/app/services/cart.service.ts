import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product.type';

export interface CartItem {
  product: Product;
  ammount: number;
}

export interface Cart {
  cartItems: CartItem[]
  totalSum: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart = new BehaviorSubject<Cart>({ cartItems: [], totalSum: 0 });;

  public updateCart(product: Product, ammount: number, sum: number): void {
    let isProductAdded = false;
    const cartItems = this._cart.value.cartItems.map(item => {
      if (item.product.id === product.id) {
        isProductAdded = true;
        item.ammount += ammount;
        this._cart.value.totalSum = Number((this._cart.value.totalSum + sum).toFixed(2));
        return item;
      }
      return item;
    });

    if (!isProductAdded) {
      this._cart.value.cartItems.push({ product, ammount });
      this._cart.value.totalSum += sum;
    } else {
      this._cart.value.cartItems = cartItems;
    }
  }

  public updateTotalSum(sum: number): void {
    this._cart.value.totalSum = Number((this._cart.value.totalSum + sum).toFixed(2));
  }

  public removeFromCart(id: number, sum: number): void {
    const newCart = this._cart.value.cartItems.filter(item => item.product.id !== id);
    this._cart.value.cartItems = newCart;
    this._cart.value.totalSum = Number((this._cart.value.totalSum - sum).toFixed(2));
  }

  public resetCartData(): void {
    this._cart.value.cartItems = [];
    this._cart.value.totalSum = 0;
  }

  public get cart(): Cart {
    return this._cart.value;
  }
}
