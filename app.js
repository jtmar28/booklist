function Book(title,isbn, author){
    this.title = title;
    this.isbn = isbn;
    this.author = author;
}
function UI(){}

UI.prototype.addBookToList = function(book){
    const list = document.querySelector('#book-list');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;
    list.appendChild(tr);
}
UI.prototype.clearFields = function(){
    document.querySelector('#title').value = "";
    author = document.querySelector('#author').value = "";
    isbn = document.querySelector('#isbn').value = "";
}
UI.prototype.deleteBookFromList = function(target){
    if(target.classList.contains('delete')){
        target.parentElement.parentElement.remove();
    }
}
document.querySelector('#book-form').addEventListener('submit', function(e){
    const title = document.querySelector('#title').value,
          author = document.querySelector('#author').value,
          isbn = document.querySelector('#isbn').value;
    const book = new Book(title,author,isbn);
    const ui = new UI();
    ui.addBookToList(book);
    ui.clearFields();
    e.preventDefault();
});
document.querySelector('#book-list').addEventListener('click', function(e){
    const ui = new UI();
    ui.deleteBookFromList(e.target);
});