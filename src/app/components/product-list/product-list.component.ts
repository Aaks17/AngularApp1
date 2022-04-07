import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private _productService:ProductService) { }

  productList:Product[];

  ngOnInit() {
    this.productList=this._productService.getProducts();
  }

  collectEmmitedProducts(event){
    this.productList.push(event);

  }

}
