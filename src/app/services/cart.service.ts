import { Injectable } from '@angular/core';
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

  private _cart: Cart = { cartItems: [], totalSum: 0 };

  public updateCart(product: Product, ammount: number, sum: number): void {
    let isProductAdded = false;
    const cart = this._cart.cartItems.map(item => {
      if (item.product.id === product.id) {
        isProductAdded = true;
        item.ammount += ammount;
        this._cart.totalSum = Number((this._cart.totalSum + sum).toFixed(2));
        return item;
      }
      return item;
    });

    if (!isProductAdded) {
      this._cart.cartItems.push({ product, ammount });
      this._cart.totalSum += sum;
    } else {
      this._cart.cartItems = cart;
    }
  }

  public updateTotalSum(sum: number): void {
    this._cart.totalSum = Number((this._cart.totalSum + sum).toFixed(2));
  }

  public removeFromCart(id: number, sum: number): void {
    const newCart = this._cart.cartItems.filter(item => item.product.id !== id);
    this._cart.cartItems = newCart;
    this._cart.totalSum = Number((this._cart.totalSum - sum).toFixed(2));
  }

  public resetCartData(): void {
    this._cart.cartItems = [];
    this._cart.totalSum = 0;
  }

  public get cart(): Cart {
    return this._cart;
  }
}
