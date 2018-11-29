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
UI.prototype.alert = function(message, className){
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div,form);
    setInterval(() => {
        document.querySelector('.alert').remove();
    }, 3000);
}
document.querySelector('#book-form').addEventListener('submit', function(e){
    const title = document.querySelector('#title').value,
          author = document.querySelector('#author').value,
          isbn = document.querySelector('#isbn').value;
    const book = new Book(title,author,isbn);
    const ui = new UI();
    if(title === '' || author === '' || isbn === ''){
        ui.alert('Please insert text into text fields', 'error');
    }else{
        ui.alert('Book Added!', 'success');
        ui.addBookToList(book);
        ui.clearFields();
    }
    e.preventDefault();
});
document.querySelector('#book-list').addEventListener('click', function(e){
    const ui = new UI();
    
    ui.deleteBookFromList(e.target);
    ui.alert('Book Removed!', 'success');
});