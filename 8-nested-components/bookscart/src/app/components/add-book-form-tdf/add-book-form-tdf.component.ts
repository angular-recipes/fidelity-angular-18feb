import { Router } from '@angular/router';
import { BookService } from './../../services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book-form-tdf',
  templateUrl: './add-book-form-tdf.component.html',
  styleUrls: ['./add-book-form-tdf.component.css']
})
export class AddBookFormTDFComponent implements OnInit {
  book: Book;
  constructor(
    private bookService: BookService,
    private router: Router  
  ) { }

  ngOnInit() {
    this.book = new Book(null, null, null, null);
  }

  save() {
    this.bookService
      .addBook(this.book)
      .subscribe( res => this.router.navigate(['/home']));
  }

}
