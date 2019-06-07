import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class BookService {
  booksBaseEndpoint: string = environment.WBOOK_SERVICE + '/api/v1/books';

  constructor(
    private http: HttpClient
  ) {}

  getBooks() {
    return this.http.get<any>(this.booksBaseEndpoint, {});
  }

  getBookById(id: string) {
    return this.http.get<any>(`${this.booksBaseEndpoint}/${id}`);
  }
}
