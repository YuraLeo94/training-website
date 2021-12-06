import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../product.type';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsApiUrl = 'https://raw.githubusercontent.com/YuraLeo94/BD-Data/master/BookStoreAngular/db.json';
  private _productsData= new BehaviorSubject<Product[]>([]);
  private _detailsOfSelectedProduct = new BehaviorSubject<Product | undefined>(undefined);

  constructor(private http: HttpClient) { }

  // any type is for getting data from GitHub
  public getProducts(): Observable<Product[] | any> {
    return this.http.get<Product[]>(this.productsApiUrl);
  }

  public get productsData(): Product[] {
    return this._productsData.value;
  }

  public set productsData(productData: Product[]) {
    this._productsData.next(productData);
  }

  public updateProduct(product: Product): Observable<Product> {
    const url = `${this.productsApiUrl}/${product.id}`;
    return this.http.put<Product>(url, product, httpOptions);
  }

  public set detailsOfSelectedProduct(product: Product) {
    this._detailsOfSelectedProduct.next(product);
  }

  public get detailsOfSelectedProduct(): Product {
    return this._detailsOfSelectedProduct.value as Product;
  }
}
