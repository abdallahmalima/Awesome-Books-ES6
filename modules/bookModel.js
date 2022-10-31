/* ===============================================================*\
          Book Model class for perfom direct data operation
  *\=============================================================== */

class BookModel {
  constructor(createBookForm = null) {
    this.createBookForm = createBookForm;
  }

  getBooks() {
    return localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : [];
  }

  add(createBookForm) {
    const book = this.validated(createBookForm);
    if (book === null) return;

    const books = this.getBooks();
    books.push(book);
    this.saveBook(books);
  }

  saveBook(books) {
    localStorage.setItem('books', JSON.stringify(books));
  }

  validated({ title, author }) {
    title = title.value.trim();
    author = author.value.trim();
    if (title.length > 0 && author.length > 0) {
      return { title, author };
    }

    return null;
  }

  removeBook(contentWrapper, bookView) {
    const removeButtons = document.querySelectorAll('.remove-btn');
    const me = this;

    removeButtons.forEach((removeBtn) => {
      removeBtn.addEventListener('click', () => {
        const index = Number(removeBtn.id);
        let books = this.getBooks();
        books = books.filter((book, i) => i !== index);
        this.saveBook(books);
        const isItemRemoved = true;
        bookView.renderBooks(contentWrapper, me, isItemRemoved);
      });
    });
  }
}

export default BookModel;