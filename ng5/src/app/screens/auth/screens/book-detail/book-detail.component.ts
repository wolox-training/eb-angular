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
  img: string;
  title: string;
  publisher: string;
  year: string;
  genre: string;
  author: string;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.bookService.getBookById(this.id)
      .subscribe(res => {
        this.img = res.image_url;
        this.title = res.title;
        this.publisher = res.publisher;
        this.year = res.year;
        this.genre = res.genre;
        this.author = res.author;
        this.author = res.author;
      });
  }
}
