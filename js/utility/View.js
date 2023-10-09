// View.js (Utility Module)
export class View {
    static render(data) {
        const listContainer = document.getElementById('list-container');
        listContainer.innerHTML = '';

        data.forEach((book) => {
            const cardItem = document.createElement('div');
            const authorParagraph = document.createElement('p');
            const titleParagraph = document.createElement('p');

            // Create and style HTML elements
            cardItem.classList.add('card-item');
            authorParagraph.classList.add('text-light');
            authorParagraph.style.fontWeight = 'bold';
            authorParagraph.style.fontStyle = 'italic';
            titleParagraph.classList.add('text-light');

            // Add array data
            authorParagraph.textContent = `Author: ${book.author}`;
            titleParagraph.textContent = `Title: ${book.title}`;

            cardItem.appendChild(authorParagraph);
            cardItem.appendChild(titleParagraph);

            // Append to container element
            listContainer.appendChild(cardItem);
        });
    }
}
