function Book(title,isbn, name){
    this.title = title;
    this.isbn = isbn;
    this.name = name;
}
function UI(){}

UI.prototype.addBookToList = function(book){
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${book.title}</td>
        <td>${book.isbn}</td>
        <td>${book.author}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
    const list = document.querySelector('#book-list');
    list.appendChild(tr);
    e.preventDefault();
}

document.querySelector('#book-form').addEventListener('submit', function(e){
    const title = document.querySelector('#title').value,
          author = document.querySelector('#author').value,
          isbn = document.querySelector('#isbn').value;
    const book = new Book(title,author,isbn);
    const ui = new UI();
    ui.addBookToList(book);
    e.preventDefault();
});