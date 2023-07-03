const addBtn = document.getElementById('addBook');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const bookForm = document.getElementById('bookForm');
const gridContainer = document.querySelector('.grid-container');

const popupContainer = document.getElementById('popupContainer');

addBtn.addEventListener('click', function() {
    popupContainer.classList.toggle('active');
})

popupContainer.addEventListener('click', function(event) {
    if (!event.target.closest('.popupContent')) {
        popupContainer.classList.remove('active');
    }
})

bookForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <h3>${title.value}</h3>
        <p>Author: ${author.value}</p>
        <p>Pages Read: ${pages.value}</p>
        <div class="card-buttons">
            <button id ="delete">Delete</button>
            <button class="read-toggle">${read.checked ? 'Read' : 'Unread'}</button>
        </div>
    `;

    const readToggleBtn = card.querySelector('.read-toggle');

    readToggleBtn.addEventListener('click', function() {
        if (readToggleBtn.textContent === 'Read') {
            readToggleBtn.textContent='Unread';
            readToggleBtn.classList.remove('read');
            readToggleBtn.classList.add('unread');
        } else {
            readToggleBtn.textContent = 'Read';
            readToggleBtn.classList.remove('unread');
            readToggleBtn.classList.add('read');
        }
    })
    

    gridContainer.appendChild(card);

    title.value='';
    author.value='';
    pages.value='';
    read.checked='false';

    popupContainer.classList.remove('active');
})



