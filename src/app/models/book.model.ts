export interface Book {
  title: string;
  year: number;
  author: string;
}

export interface BookCategory {
  id: number;
  name: string;
  books: Book[];
}
