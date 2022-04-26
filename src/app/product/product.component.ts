import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product={
    name:"CIS Royal Day Wear (Grade 1-5)",
    description:"Made from Poly-cotton. Henley neckline. Short sleeves.",
    img:"https://d2pyicwmjx3wii.cloudfront.net/s/5997cc7c4d6e8ffa20e50aae/601d6e74cbfb666ae1145869/webp/elementary-school-640x640.jpg",
    availableSizes:[20,22,24,28,20,34,38,40,42],
    code:"CIEDPT20",
    brand:"ACECRAFT",
    seller:"Alchemy",
    price:450,
    off:15
  }
  
    selectedSize:number=this.product['availableSizes'][0];
  selectedQuantity:number=1;

  checkQuantity(){ 
    if(this.selectedQuantity==0){
      this.selectedQuantity=1
    }
    else if(this.selectedQuantity>999){
      this.selectedQuantity=999
    }
    
  }

  constructor(private _route:ActivatedRoute) { 
    
  }

  ngOnInit() {
    // this.product= this._route.snapshot.paramMap.get("id")
  }

}

