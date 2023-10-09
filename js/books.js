// Books.js (Main class)
import { Books as booksList } from './data/Books.js';
import { View } from "./utility/View.js"; //utility class to abstract the view rendering functionality

class Books {

    bookList = [];

    constructor() {
        this.bookList = booksList;
    }

    searchByTitleAuthor(input) {
        const searchTerm = input.toLowerCase();
        const filteredData = this.bookList.filter((item) => {
            const titleMatch = item.title.toLowerCase().includes(searchTerm);
            const authorMatch = item.author.toLowerCase().includes(searchTerm);

            return titleMatch || authorMatch;
        });

        View.render(filteredData);
    }
}

//Create books object and render default list on page-load
const booksObj = new Books();
View.render(booksObj.bookList);

//add search event
const searchInput = document.getElementById('search-txt');
searchInput.addEventListener('keyup', (event) => {
    booksObj.searchByTitleAuthor(event.target.value);
})

export default Books;