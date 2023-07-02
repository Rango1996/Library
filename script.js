const addBtn = document.getElementById("addBook");
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');

const popupContainer = document.getElementById('popupContainer');

addBtn.addEventListener('click', function() {
    popupContainer.classList.toggle('active');
})

popupContainer.addEventListener('click', function(event) {
    if (!event.target.closest('.popupcontent')) {
        popupContainer.classList.remove('active');
    }
})