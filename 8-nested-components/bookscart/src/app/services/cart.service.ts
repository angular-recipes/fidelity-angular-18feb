import { Item } from './../models/item';
import { BookService } from './book.service';
import { Cart } from './../models/cart';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart;

  constructor(private bookService: BookService) { 
    this.cart = new Cart([], 0);
  }

  getCart() {
    return this.cart;
  }

  addToCart(book) {
    let item = new Item(book.title, book.price, 1);
    this.cart.addItem(item);
  }

  getNumOfItems() {
    return this.cart.items.reduce((res, i) => res + i.qty, 0);
  }

}
