import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../../../models/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  id: string;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.bookService.getBookById(this.id)
      .subscribe(res => {
        console.log(res);
      });
  }
}
