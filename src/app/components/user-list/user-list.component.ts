import { Component, OnInit,Output } from '@angular/core';
import { Customer } from 'src/app/customer.model';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

 userList:Customer[];
  constructor(private _customerService:CustomerService) { }

  ngOnInit() {
    this.userList= this._customerService.getCustomer();
  }

}
