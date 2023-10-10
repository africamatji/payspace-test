import { Books as BooksList } from "./data/Books.js";
import Books from "./books.js";

const booksObj = new Books();

new Vue({
    el: '#vue-app',
    data: {
        books: BooksList,
        sortBy: null,
    },
    methods: {
        sortTitle(order) {
            this.books = ( order === 'asc')
                ? BooksList.slice().sort(booksObj.sortByTitles)
                : BooksList.slice().sort((a, b) => booksObj.sortByTitles(b, a));
        },
        sortAuthor(order) {
            this.books = (order === 'asc')
                ? BooksList.slice().sort(booksObj.sortByAuthors)
                : BooksList.slice().sort((a, b) => booksObj.sortByAuthors(b, a))
        },
        search(event) {
          this.books = booksObj.searchByTitleAuthor(event.target.value);
        },
    },
    mounted() {
        this.books = BooksList;
    },
});
