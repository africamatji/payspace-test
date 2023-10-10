import { Books as BooksList } from "./data/Books.js";
import Books from "./books.js";

const booksObj = new Books();

new Vue({
    el: '#vue-app',
    data: {
        books: BooksList,
        sortBy: null,
        itemsPerPage: 3, // Number of items to display per page
        currentPage: 1, // Current page number
    },
    computed: {
        // Calculate the total number of pages based on the number of books and itemsPerPage
        totalPages() {
            return Math.ceil(this.books.length / this.itemsPerPage);
        },
        // Calculate the starting index for the current page
        startIndex() {
            return (this.currentPage - 1) * this.itemsPerPage;
        },
        // Slice the books array to display only the current page's books
        currentPageBooks() {
            return this.books.slice(this.startIndex, this.startIndex + this.itemsPerPage);
        },
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
        // Go to the previous page
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        // Go to the next page
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
    },
    mounted() {
        this.books = BooksList;
    },
});
