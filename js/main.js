//Main js, application main file
import Books from "./books.js";

const booksObj = new Books();
const bookList = booksObj.bookList;

booksObj.renderView(bookList); //render view with default list

//Add input events
document.getElementById('search-txt').addEventListener('keyup', (event) => {
    const data = booksObj.searchByTitleAuthor(event.target.value);
    booksObj.renderView(data);
});
document.getElementById('sort-title-asc').addEventListener('click', (event) => {
    const data = bookList.slice().sort(booksObj.sortByTitles);
    booksObj.renderView(data);
});
document.getElementById('sort-title-desc').addEventListener('click', (event) => {
    const data = bookList.slice().sort((a, b) => booksObj.sortByTitles(b, a));
    booksObj.renderView(data);
});
document.getElementById('sort-author-asc').addEventListener('click', (event) => {
    const data = bookList.slice().sort(booksObj.sortByAuthors);
    booksObj.renderView(data);
});
document.getElementById('sort-author-desc').addEventListener('click', (event) => {
    const data = bookList.slice().sort((a, b) => booksObj.sortByAuthors(b, a));
    booksObj.renderView(data);
});
