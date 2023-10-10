//Main js, application main file
import Books from "./books.js";

const booksObj = new Books();
const bookList = booksObj.bookList;

booksObj.renderView(bookList);

//Search event
document.getElementById('search-txt').addEventListener('keyup', (event) => {
    const data = booksObj.searchByTitleAuthor(event.target.value);
    booksObj.renderView(data);
});

// Title ascending
document.getElementById('sort-title-asc').addEventListener('click', (event) => {
    const data = bookList.slice().sort(booksObj.sortByTitles);
    booksObj.renderView(data);
});

// Title descending
document.getElementById('sort-title-desc').addEventListener('click', (event) => {
    const data = bookList.slice().sort((a, b) => booksObj.sortByTitles(b, a));
    booksObj.renderView(data);
});

// Author ascending
document.getElementById('sort-author-asc').addEventListener('click', (event) => {
    const data = bookList.slice().sort(booksObj.sortByAuthors);
    booksObj.renderView(data);
});

// Author descending
document.getElementById('sort-author-desc').addEventListener('click', (event) => {
    const data = bookList.slice().sort((a, b) => booksObj.sortByAuthors(b, a));
    booksObj.renderView(data);
});
