import {Component, OnInit} from '@angular/core';
import {BookClass} from "./book.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public favoriteBook: any;
  authorTxt: any;
  titleTxt: any;
  yearTxt: any;

  constructor() {
  }

  ngOnInit(): void {
    this.favoriteBook = [
      new BookClass('Dune', 1965, 'Frank Herbert'),
      new BookClass('Ender\'s Game', 1985, 'Orson Scott Card'),
      new BookClass('1984', 1949, 'George Orwell'),
      new BookClass('Fahrenheit 451 ', 1953, 'Ray Bradbury'),
      new BookClass('Brave New World', 1932, 'Aldous Huxley')
    ]
    console.log(this.favoriteBook);
  }

  addNewBook() {
    if (!this.authorTxt && !this.titleTxt && !this.yearTxt) {
      return;
    }
    this.favoriteBook?.push(
      new BookClass(this.titleTxt, this.yearTxt, this.authorTxt)
    );
    this.authorTxt = '';
    this.titleTxt = '';
    this.yearTxt = '';
  }

  onClickDelete(index: number) {
    this.favoriteBook?.splice(index, 1);
  }

  createNewList() {
    this.favoriteBook = [
      new BookClass('Dune', 1965, 'Frank Herbert'),
      new BookClass('Ender\'s Game', 1985, 'Orson Scott Card'),
      new BookClass('1984', 1949, 'George Orwell'),
      new BookClass('Fahrenheit 451 ', 1953, 'Ray Bradbury'),
      new BookClass('Brave New World', 1932, 'Aldous Huxley')
    ]
  }

  deleteList() {
    this.favoriteBook = [];
  }

  onClickOrder(index: number, action: string) {
    if (this.favoriteBook && this.favoriteBook?.length > 0) {
      if (action?.toUpperCase() === 'UP') {
        const flag = this.favoriteBook[index - 1];
        this.favoriteBook[index - 1] = this.favoriteBook[index];
        this.favoriteBook[index] = flag;
      } else {
        const flag = this.favoriteBook[index + 1];
        this.favoriteBook[index + 1] = this.favoriteBook[index];
        this.favoriteBook[index] = flag;
      }
    }

  }

}
