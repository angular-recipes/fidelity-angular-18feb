import { Http } from '@angular/http';
import { Book } from './../models/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];
  private url = 'http://localhost:3000/books/';

  constructor(private http: Http) {
  }

  getBooks() {
    return this.http.get(this.url);
  }

  rateUp(book) {
    if(book.rating < 5)
      book.rating++;
    return this.http.put(this.url + book.id, book);
  }

  rateDown(book) {
    if(book.rating > 1)
      book.rating--;
    return this.http.put(this.url + book.id, book);
  }

  getBookById(id) {
    return this.http.get(this.url + id);
  }

  addBook(book: Book) {
    return this.http.post(this.url, book);
  }
}
