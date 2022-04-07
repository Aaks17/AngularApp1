import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  image="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg";
  product:Product={
    title:null,
    image:this.image,
    description:null,
    price:null,

  }
@Output()emitter=new EventEmitter();
  submit(){
    this.emitter.emit(this.product);
    console.log("emitting product")
    Notiflix.Notify.success("Product added successfully")
    
  }

}
