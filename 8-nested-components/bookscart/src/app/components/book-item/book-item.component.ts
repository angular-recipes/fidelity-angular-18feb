import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book;
  @Output() rateUpClick = new EventEmitter();
  @Output() rateDownClick = new EventEmitter();
  @Output() addToCartClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  handleRateUpBtnClick() {
    this.rateUpClick.emit(this.book);
  }

  handleRateDownBtnClick() {
    this.rateDownClick.emit(this.book);
  }

  handleAddToCartBtnClick() {
    this.addToCartClick.emit(this.book);
  }
}
