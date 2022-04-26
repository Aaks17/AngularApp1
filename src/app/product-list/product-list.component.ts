import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList=[
    {
      name:"CIS Royal Day Wear (Grade 1-5)",
      description:"Made from Poly-cotton. Henley neckline. Short sleeves.",
      img:"https://d2pyicwmjx3wii.cloudfront.net/s/5997cc7c4d6e8ffa20e50aae/601d6e74cbfb666ae1145869/webp/elementary-school-640x640.jpg",
      availableSizes:[20,22,24,28,20,34,38,40,42],
      code:"CIEDPT20",
      brand:"ACECRAFT",
      seller:"Alchemy",
      price:450,
      off:15,
      schoolId:1,
      id:100
    },
    {
      name:"CIS Royal Day Wear (Grade 1-5)",
      description:"Made from Poly-cotton. Henley neckline. Short sleeves.",
      img:"https://d2pyicwmjx3wii.cloudfront.net/s/5997cc7c4d6e8ffa20e50aae/601d6ffdbb47db6b5e246674/webp/middle-school-480x480.jpg",
      availableSizes:[20,22,24,28,20,34,38,40,42],
      code:"CIEDPT20",
      brand:"ACECRAFT",
      seller:"Alchemy",
      price:450,
      off:15,
      schoolId:1,
      id:101
    },
    {
      name:"LMN Royal Day Wear (Grade 1-5)",
      description:"Made from Poly-cotton. Henley neckline. Short sleeves.",
      img:"https://d2pyicwmjx3wii.cloudfront.net/s/5997cc7c4d6e8ffa20e50aae/ms.products/5aa0f01491c2e5ab32f3385f/images/5aa0f01491c2e5ab32f33860/5aa0f01d91c2e5ab32f33897/webp/5aa0f01d91c2e5ab32f33897-480x480.jpg",
      availableSizes:[20,22,24,28,20,34,38,40,42],
      code:"CIEDPT20",
      brand:"ACECRAFT",
      seller:"Alchemy",
      price:450,
      off:15,
      schoolId:1,
      id:102
    },
    {
      name:"ABC Royal Day Wear (Grade 1-5)",
      description:"Made from Poly-cotton. Henley neckline. Short sleeves.",
      img:"https://d2pyicwmjx3wii.cloudfront.net/s/5997cc7c4d6e8ffa20e50aae/601d706374c88c6b06d39dc1/webp/h-school-480x480.jpg",
      availableSizes:[20,22,24,28,20,34,38,40,42],
      code:"CIEDPT20",
      brand:"ACECRAFT",
      seller:"Alchemy",
      price:450,
      off:15,
      schoolId:2,
      id:103
    },
    {
      name:"XYZ Royal Day Wear (Grade 1-5)",
      description:"Made from Poly-cotton. Henley neckline. Short sleeves.",
      img:"https://d2pyicwmjx3wii.cloudfront.net/s/5997cc7c4d6e8ffa20e50aae/601d6e74cbfb666ae1145869/webp/elementary-school-640x640.jpg",
      availableSizes:[20,22,24,28,20,34,38,40,42],
      code:"CIEDPT20",
      brand:"ACECRAFT",
      seller:"Alchemy",
      price:450,
      off:15,
      schoolId:1,
      id:104
    }
  ]
  schoolProducts:any;

  constructor(private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.schoolProducts=this.productList.filter(x=>x.schoolId.toString() == this._route.snapshot.paramMap.get('id'));
  }

}
