let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

const addBtn = document.getElementById('addBook');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const bookForm = document.getElementById('bookForm');
const gridContainer = document.querySelector('.grid-container');

const popUpContainer = document.getElementById('popupContainer');

addBtn.addEventListener('click', function() {
    popUpContainer.classList.toggle('active');
});

popUpContainer.addEventListener('click', function(event) {
    if (!event.target.closest('.popupContent')) {
        popUpContainer.classList.remove('active');
    }
});

bookForm.addEventListener('submit', function(event) {
    event.preventDefault();

    addBookToLibrary(title.value, author.value, pages.value, read.checked);

    gridContainer.innerHTML='';

    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author} </p>
        <p>Pages Read: ${book.pages} </p>
        <div class = "card-buttons"> 
            <button class="delete">Delete</button>
            <button class="read-toggle ${book.read ? 'read' : 'unread'}">${book.read ? 'Read' : 'Unread'}</button>
        </div>
        `;

        const readToggleBtn = card.querySelector('.read-toggle');

        readToggleBtn.addEventListener('click', function() {
            if (readToggleBtn.textContent === 'Read') {
                readToggleBtn.textContent = 'Unread';
                readToggleBtn.classList.remove('read');
                readToggleBtn.classList.add('unread');
                book.read = false;
            } else {
                readToggleBtn.textContent = 'Read';
                readToggleBtn.classList.remove('unread');
                readToggleBtn.classList.add('read');
                book.read = true;
            }
        })

        const deleteBtn = card.querySelector('.delete');
        deleteBtn.addEventListener('click', function() {
            card.remove();
            let index = myLibrary.indexOf(book);
            myLibrary.splice(index, 1);
        })

        gridContainer.appendChild(card);
    });

    title.value = '';
    author.value='';
    pages.value='';
    read.checked=false;

    popUpContainer.classList.remove('active');
})
