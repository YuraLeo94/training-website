import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MatCardModule } from '@angular/material/card';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TruncatePipe } from './shared/pipe/truncate.pipe';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingDialogComponent } from './components/dialogs/shopping-dialog/shopping-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCardComponent } from './components/shopping-card/shopping-card.component';
import { MatDividerModule } from '@angular/material/divider';
import { CompletedDialogComponent } from './components/dialogs/completed-dialog/completed-dialog.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutProductCardComponent } from './components/checkout-product-card/checkout-product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { DisplayCost } from './shared/pipe/display-cost.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductCardComponent,
    ProductListComponent,
    TruncatePipe,
    ShoppingCartComponent,
    ShoppingCardComponent,
    ProductDetailComponent,
    ShoppingDialogComponent,
    CompletedDialogComponent,
    OrderFormComponent,
    CheckoutComponent,
    CheckoutProductCardComponent,
    BackButtonComponent,
    DisplayCost
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatDividerModule,
    NgbModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
