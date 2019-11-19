//Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

//UI Constructor
function UI() { }

UI.prototype.addBook = (book) => {

    const list = document.getElementById('book-list');

    //Create tr element
    const tableRow = document.createElement('tr');

    //Insert Columns
    tableRow.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a class='delete'>X</a></td>
    `;

    list.appendChild(tableRow);
};

UI.prototype.clearFields = () => {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

//Event Listeners
document.getElementById('book-form').addEventListener('submit', (event) => {
    event.preventDefault();

    //Get values from text box
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

    //Instantiate book object
    const book = new Book(title, author, isbn);

    //Instantiate UI
    const ui = new UI();

    //Add book to list
    ui.addBook(book);

    ui.clearFields();

});
