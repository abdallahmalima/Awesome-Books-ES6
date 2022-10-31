/* ===============================================================*\
        Book View class for render contents on the main page
  *\=============================================================== */

class BookView {
  constructor(booksContainer = null, createBookForm = null) {
    this.booksContainer = booksContainer;
    this.createBookForm = createBookForm;
  }

  clearForm({ title, author }) {
    title.value = '';
    author.value = '';
  }

  renderBooks(contentWrapper, bookModel, isItemRemoved = false) {
    const books = bookModel.getBooks();
    const tableRows = books.map(({ title, author }, index) => (
      `<tr>
             <td>${title} by ${author}</td>
             <td><button class="remove-btn" id="${index}">remove</button></td>
           </tr>
           `
    )).join('');

    const booksContent = `
       <div class="content-container">
        <h2 class="books-title">All Awesome Books</h2>
         <div class="books-container">
           <table class="book-content">
            <tbody>
                ${tableRows}
            </tbody>
           </table>
         </div>
       </div>
       `;
    contentWrapper.innerHTML = booksContent;
    if (isItemRemoved) contentWrapper.children[0].classList.remove('content-container');
    bookModel.removeBook(contentWrapper, this);
  }

  renderForm(contentWrapper) {
    contentWrapper.innerHTML = `
       <div class="content-container">
       <div class="form-container">
       <h2>Add a new book</h2>
       <form class="create-book" id="create-book-form" action="">
         <input class="input" name="title" type="text" placeholder="Title">
         <input class="input" name="author" type="text" placeholder="Author">
         <button id="add-btn" type="submit">Add</button>
       </form>
     </div>
     </div>
       `;
  }

  renderContact(contentWrapper) {
    contentWrapper.innerHTML = `
       <div class="content-container">
       <h2>Contact Information</h2>
         <div class="contact-container">
           <p>Do you have any questions or you just want to say hello?, You can reach out to us</p>
   
           <ul>
             <li>Our email is email@email.com</li>
             <li>Our phone is : +124125475</li>
             <li>Our address is : Streethome 214, 14237 city, Country</li>
           </ul>
     </div>
       `;
  }
}

export default BookView;