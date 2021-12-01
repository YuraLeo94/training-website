import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-shopping-dialog',
  templateUrl: './shopping-dialog.component.html',
  styleUrls: ['./shopping-dialog.component.less']
})
export class ShoppingDialogComponent {

  constructor(public dialogRef: MatDialogRef<ShoppingDialogComponent>) { }

  public onClose(): void {
    this.dialogRef.close();
  }

  public onGoToCart(): void {
    this.dialogRef.close();
  }

  public onContinueShop(): void {
    this.dialogRef.close();
  }

}
