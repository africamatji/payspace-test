//Main js, application main file

import Books from "./books.js";
import { View } from "./utility/View.js"; //utility class to abstract the view rendering functionality

const booksObj = new Books();
View.render(booksObj.bookList);

//Search event
document.getElementById('search-txt').addEventListener('keyup', (event) => {
    booksObj.searchByTitleAuthor(event.target.value);
});

// Title ascending
document.getElementById('sort-title-asc').addEventListener('click', (event) => {
    const data = booksObj.bookList.slice().sort(booksObj.sortByTitles);
    View.render(data);
});

// Title descending
document.getElementById('sort-title-desc').addEventListener('click', (event) => {
    const data = booksObj.bookList.slice().sort((a, b) => booksObj.sortByTitles(b, a));
    View.render(data);
});

// Author ascending
document.getElementById('sort-author-asc').addEventListener('click', (event) => {
    const data = booksObj.bookList.slice().sort(booksObj.sortByAuthors);
    View.render(data);
});

// Author descending
document.getElementById('sort-author-desc').addEventListener('click', (event) => {
    const data = booksObj.bookList.slice().sort((a, b) => booksObj.sortByAuthors(b, a));
    View.render(data);
});
