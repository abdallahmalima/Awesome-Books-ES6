// import all module used in the project
import { DateTime } from './node_modules/luxon/src/luxon.js';
import updateDateTime from './modules/dateUtil.js';
import BookModel from './modules/bookModel.js';
import BookView from './modules/bookView.js';
import route from './modules/route.js';

// initialize content wrapper and date container
const contentWrapper = document.querySelector('#content .wrapper');
const dateContainer = document.querySelector('.date');

// set datetime change after every 1 sec
updateDateTime(dateContainer, DateTime);

const bookModel = new BookModel();
const bookView = new BookView();
// reader list books when user visit website for the first time
bookView.renderBooks(contentWrapper, bookModel);

// Add event listener on navigation links for replace content when user click navigation links
const lists = document.querySelectorAll('.link-btn');
lists.forEach((link, index) => {
  link.addEventListener('click', () => {
    route({
      contentWrapper, bookView, bookModel, index,
    });
  });
});
