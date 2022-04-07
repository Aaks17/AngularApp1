import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  constructor() { }
  count: number = 0;

  @Output()emitter=new EventEmitter();

  ngOnInit() {

  }

  decrease() {
    if (this.count != 0) {
      this.count--;
      this.emitter.emit(this.count.toString());
    }    
  }

  increase(){
    this.count++;
    this.emitter.emit(this.count.toString());
  }
}
