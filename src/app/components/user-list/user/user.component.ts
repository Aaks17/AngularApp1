import { Component, Input, OnInit } from '@angular/core';
import { Customer } from 'src/app/customer.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  user: Customer[];
  status = true;
  isDisplay = false;

  color = {
    backgroundColor: 'red',
    color: 'white',
    margin: '10px'
  }

  changeStatus() {
    this.status = !this.status
  }

  changeIsDisplay() {
    this.isDisplay = !this.isDisplay;
  }

}
