import { Component, OnInit } from '@angular/core';
import { Book } from '../../../../models/book';
import { BookService } from './../../../../models/book.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Book[];

  constructor(
    private booksService: BookService,
  ) { }

  ngOnInit() {
    this.booksService.getBooks()
      .subscribe(res => {
        this.books = res;
      });
  }
}
