import { Component, OnInit } from '@angular/core';

import { IProduct } from './interfaces/IProduct';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./assets/css/product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private _productService: ProductService) {}

  pageTitle: string = `Acme Product Managment`;

  imageWidth: number = 50;
  imageMargin: number = 2;

  showImage: boolean = true;

  private _listFilter: string = '';

  public get listFilter(): string {
    return this._listFilter;
  }

  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  toggleImage() {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    return this.products.filter((x) =>
      x.productName.toLocaleLowerCase().includes(filterBy.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.products = this._productService.getProducts();

    this.filteredProducts = this.products;
  }

  onRatingClicked(message: string) {
    this.pageTitle = `Product list: ${message}`;
  }
}
