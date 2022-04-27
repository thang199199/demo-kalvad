import {Component, OnInit} from '@angular/core';
import {Book, BookCategory} from "../models/book.model";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-favorite-book',
  templateUrl: './favorite-book.component.html',
  styleUrls: ['./favorite-book.component.scss']
})
export class FavoriteBookComponent implements OnInit {

  books: Book[] = [];
  addForm = new FormGroup({})
  bookCategory: BookCategory[] = [];
  selectedCategory: number = 0;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.bookCategory = [{
      id: 0,
      name: 'Favorite Book',
      books: [
        {title: 'Dune', year: 1965, author: 'Frank Herbert'},
        {title: 'Ender\'s Game', year: 1985, author: 'Orson Scott Card'},
        {title: '1984', year: 1949, author: 'George Orwell'},
        {title: 'Fahrenheit 451', year: 1953, author: 'Ray Bradbury'},
        {title: 'Brave New World', year: 1932, author: 'Aldous Huxley'}
      ]},
      {
        id: 1,
        name: 'My favourite science fiction',
        books: [
          {title: 'The Power', year: 2016, author: 'Naomi Alderman'},
          {title: 'Borner', year: 2017, author: 'Jeff VanderMeer'},
          {title: 'Exhalation', year: 2019, author: 'Ted Chiang'}
        ]}, {
        id: 2,
        name: 'My favourite novels of 2020',
        books: [
          {title: 'Blue Ticket: A Nove', year: 2020, author: 'Sophie Mackintosh'},
          {title: 'Cleanness', year: 2020, author: 'Garth Greenwell'},
          {title: 'Piranesi', year: 2020, author: 'Susanna Clarke and Chiwetel Ejiofor'},
          {title: 'The Mirror and the Light', year: 2020, author: 'Hilary Mantel'},
          {title: 'Earthlings: A Novel', year: 2020, author: 'Sayaka Murata'}
        ]},
    ];
    this.selectedCategory = this.bookCategory[0].id;
    this.books = this.bookCategory[0].books;
    this.addForm = this.formBuilder.group({
      titleControl: '',
      yearControl: '',
      authorControl: ''
    })

  }

  addNewBook() {
    this.bookCategory[this.selectedCategory].books.push({
      title: this.addForm.get('titleControl')?.value,
      year: this.addForm.get('yearControl')?.value,
      author: this.addForm.get('authorControl')?.value
    });

    // this.addForm.get('titleControl')?.setValue('');
    // this.addForm.get('yearControl')?.setValue('');
    // this.addForm.get('authorControl')?.setValue('');
  }

  onClickDelete(index: number) {
    this.bookCategory[this.selectedCategory].books.splice(index, 1);
  }

  createNewList() {
   this.books = this.bookCategory[this.selectedCategory].books;
  }

  deleteList() {
    this.books = [];
  }

  onClickOrder(index: number, action: string) {
    if (this.books && this.books?.length > 0) {
      if (action?.toUpperCase() === 'UP') {
        const flag = this.books[index - 1];
        this.books[index - 1] = this.books[index];
        this.books[index] = flag;
      } else {
        const flag = this.books[index + 1];
        this.books[index + 1] = this.books[index];
        this.books[index] = flag;
      }
    }

  }

  onChangeCategory() {
    this.books = this.bookCategory[this.selectedCategory].books;
  }
}
