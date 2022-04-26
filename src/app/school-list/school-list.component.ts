import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {

  constructor() { }

  schoolList = [
    {
      name: "BVB",
      id: 1,
      logo: "http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/jain.jpeg"
    },
    {
      name: "Montfort",
      id: 2,
      logo: "http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/rvschool.png"
    },
    {
      name: "SMS",
      id: 3,
      logo: "http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/sophias.jpg"
    }]
    
  ngOnInit(): void {
  }

}
