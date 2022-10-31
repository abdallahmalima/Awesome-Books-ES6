const addFormSubmitEventListener = (bookView, bookModel) => {
  const createBookForm = document.querySelector('#create-book-form');
  createBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    bookModel.add(createBookForm);
    bookView.clearForm(createBookForm);
  });
};

/* ============================================================================================*\
        Book Route function for replace content on the main page based on navigation click
  *\=========================================================================================== */

function route({
  contentWrapper, bookView, bookModel, index,
}) {
  if (index === 0) {
    bookView.renderBooks(contentWrapper, bookModel);
  } else if (index === 1) {
    bookView.renderForm(contentWrapper);
    addFormSubmitEventListener(bookView, bookModel);
  } else {
    bookView.renderContact(contentWrapper);
  }
}

export default route;