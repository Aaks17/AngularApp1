import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input()
  product: object;
  status = true;
  isDisplay = false;
  quantity:number=0;

  updateCount(count){
    this.quantity=count;

  }

  color = {
    backgroundColor: 'red',
    color: 'white',
    margin: '10px'
  }

  classes = {
    'btn btn-primary': true
  }

  changeStatus() {
    this.status = !this.status
  }

  changeIsDisplay() {
    this.isDisplay = !this.isDisplay;
  }


}
