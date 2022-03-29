import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp1';
  status = true;
  changeStatus() {
    this.status = !this.status
  }
  obj: any = [
    {
      name: "Aakass",
      age: 22,
      gender: "Male"
    },
    {
      name: "Abi",
      age: 21,
      gender: "Male"
    }
  ]
}
