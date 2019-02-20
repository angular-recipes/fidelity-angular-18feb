import { Http } from '@angular/http';
import { CartService } from './../../services/cart.service';
import { BookService } from './../../services/book.service';
import { Item } from './../../models/item';
import { Cart } from './../../models/cart';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  cart: Cart;
  today = new Date();

  constructor(
    private bookService: BookService, 
    private cartService: CartService,
    private http: Http
  ) {
    this.cart = cartService.getCart();
  }

  ngOnInit() {
    this.books = [];
    this.bookService
      .getBooks()
      .subscribe( res => this.books = res.json());
  }

  rateUp(book) {
    this.bookService
      .rateUp(book)
      .subscribe(res => console.log(res.json()));
  }

  rateDown(book) {
    this.bookService
      .rateDown(book)
      .subscribe(res => console.log(res.json()));
  }

  addToCart(book) {
    this.cartService.addToCart(book);
  }

}
