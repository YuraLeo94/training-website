import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Product } from 'src/app/product.type';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { MAX_AMOUNT, MIN_AMOUNT } from 'src/app/shared/global.const';
import { ShoppingDialogComponent } from '../dialogs/shopping-dialog/shopping-dialog.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.less']
})
export class ProductDetailComponent implements OnInit {

  public product: Product;
  public minAmount = MIN_AMOUNT;
  public maxAmount = MAX_AMOUNT;
  public count = this.minAmount;
  public starRating: number;
  public maxRating = 5;
  public isAddToCart = true;

  constructor(private dialog: MatDialog, private productService: ProductService, private cartService: CartService) {
  }

  public ngOnInit(): void {
    this.product = this.productService.detailsOfSelectedProduct;
    this.starRating = this.product.rating;
  }

  public addToCart(): void {
    this.cartService.updateCart(this.product, this.count, this.totalCoast);
    this.dialog.open(ShoppingDialogComponent);
  }

  public updateRating(): void {
    this.productService.updateProduct({ ...this.product, rating: this.starRating }).subscribe();
  }

  private get totalCoast(): number {
    return this.product.cost * this.count;
  }

  public disableEnableAddToCart(): void {
    if (this.count) {
      this.isAddToCart = true
    } else {
      this.isAddToCart = false
    }
  }
}
