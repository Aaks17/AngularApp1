import { Component, OnInit } from '@angular/core';
import {CarouselModule} from 'primeng/carousel';
import { Product } from '../product.model';

@Component({
  selector: 'app-related-product',
  templateUrl: './related-product.component.html',
  styleUrls: ['./related-product.component.css']
})
export class RelatedProductComponent implements OnInit {


  responsiveOptions;

  products:any=[{
    name:"CIS Royal Day Wear (Grade 1-5)",
    description:"Made from Poly-cotton. Henley neckline. Short sleeves.",
    img:"https://d2pyicwmjx3wii.cloudfront.net/s/5997cc7c4d6e8ffa20e50aae/601d6e74cbfb666ae1145869/webp/elementary-school-640x640.jpg",
    availableSizes:[20,22,24,28,20,34,38,40,42],
    code:"CIEDPT20",
    brand:"ACECRAFT",
    seller:"Alchemy",
    price:450,
    off:15,
    id:100
  },
  {
    name:"CIS Royal Day Wear (Grade 1-5)",
    description:"Made from Poly-cotton. Henley neckline. Short sleeves.",
    img:"https://d2pyicwmjx3wii.cloudfront.net/s/5997cc7c4d6e8ffa20e50aae/ms.products/5aa0f5c6f04705ab2ca345c6/images/5aa0f5c6f04705ab2ca345c7/5aa0f5d0f04705ab2ca345f9/webp/5aa0f5d0f04705ab2ca345f9-480x480.jpg",
    availableSizes:[20,22,24,28,20,34,38,40,42],
    code:"CIEDPT20",
    brand:"ACECRAFT",
    seller:"Alchemy",
    price:450,
    off:15,
    id:101
  },
  {
    name:"CIS Royal Day Wear (Grade 1-5)",
    description:"Made from Poly-cotton. Henley neckline. Short sleeves.",
    img:"https://d2pyicwmjx3wii.cloudfront.net/s/5997cc7c4d6e8ffa20e50aae/ms.products/5aa0f01491c2e5ab32f33832/images/5aa0f01491c2e5ab32f33833/5aa0f01e91c2e5ab32f338a1/webp/5aa0f01e91c2e5ab32f338a1-640x640.jpg",
    availableSizes:[20,22,24,28,20,34,38,40,42],
    code:"CIEDPT20",
    brand:"ACECRAFT",
    seller:"Alchemy",
    price:450,
    off:15,
    id:102
  },
  {
    name:"CIS Royal Day Wear (Grade 1-5)",
    description:"Made from Poly-cotton. Henley neckline. Short sleeves.",
    img:"https://d2pyicwmjx3wii.cloudfront.net/s/5997cc7c4d6e8ffa20e50aae/601d70c2cbfb666ae114a053/webp/yellow-house-t-shirt-480x480.jpg",
    availableSizes:[20,22,24,28,20,34,38,40,42],
    code:"CIEDPT20",
    brand:"ACECRAFT",
    seller:"Alchemy",
    price:450,
    off:15,
    id:103
  },
  {
    name:"CIS Royal Day Wear (Grade 1-5)",
    description:"Made from Poly-cotton. Henley neckline. Short sleeves.",
    img:"https://d2pyicwmjx3wii.cloudfront.net/s/5997cc7c4d6e8ffa20e50aae/601baa3e7779a13e48145d18/webp/t5-3-480x480.jpg",
    availableSizes:[20,22,24,28,20,34,38,40,42],
    code:"CIEDPT20",
    brand:"ACECRAFT",
    seller:"Alchemy",
    price:450,
    off:15,
    id:104
  },
  {
    name:"CIS Royal Day Wear (Grade 1-5)",
    description:"Made from Poly-cotton. Henley neckline. Short sleeves.",
    img:"https://d2pyicwmjx3wii.cloudfront.net/s/5997cc7c4d6e8ffa20e50aae/ms.products/5aa0f01491c2e5ab32f3387a/images/5aa0f01491c2e5ab32f3387b/5aa0f01f91c2e5ab32f338ab/webp/5aa0f01f91c2e5ab32f338ab-480x480.jpg",
    availableSizes:[20,22,24,28,20,34,38,40,42],
    code:"CIEDPT20",
    brand:"ACECRAFT",
    seller:"Alchemy",
    price:450,
    off:15,
    id:105
  }]
  

  constructor() {    this.responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];
}

  ngOnInit() {
  }

}
