import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product.type';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {

  public products: Product[];
  constructor(private productService: ProductService, private router: Router) { }

  public ngOnInit(): void {
    this.productService.getProducts().subscribe(products => (this.products = products));
  }

  public openProductDetail(product: Product): void {
    this.router.navigate(['/product-details']);
    this.productService.detailsOfSelectedProduct = product;
  }
}
