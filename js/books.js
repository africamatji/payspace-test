// Books.js Class
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

    sortByTitles(a, b) {
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();

        if (titleA < titleB) return -1;
        if (titleA > titleB) return 1;
        return 0;
    }

    sortByAuthors(a, b) {
        const authorA = a.author.toLowerCase();
        const authorB = b.author.toLowerCase();

        if (authorA < authorB) return -1;
        if (authorA > authorB) return 1;
        return 0;
    }
}

export default Books;