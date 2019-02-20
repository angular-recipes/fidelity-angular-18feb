import { Router } from '@angular/router';
import { BookService } from './../../services/book.service';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.css']
})
export class AddBookFormComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private router: Router  
  ) { }

  ngOnInit() {

  }

  save(title, author, price, rating) {
    let newBook = new Book(title.value, author.value, +price.value, +rating.value);
    this.bookService.addBook(newBook);
    this.router.navigate(['/home']);
  }

}
