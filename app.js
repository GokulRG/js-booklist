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
        <td><a class='delete' style="color: black;">X</a></td>
    `;

    list.appendChild(tableRow);
};

UI.prototype.clearFields = () => {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
};

UI.prototype.showAlert = (message, className) => {
    //construct error element
    const div = document.createElement('div');
    //Add classes
    div.className = `alert ${className}`;
    //Add Message
    div.appendChild(document.createTextNode(message));
    //Get parent
    const container = document.querySelector('.container');
    //get the form
    const form = document.querySelector('#book-form');
    //Insert alert before form in the container.
    container.insertBefore(div, form);
    //Timeout after 3 seconds
    setTimeout(() => {
        //Remove any alert that is shown within 3 seconds
        document.querySelector('.alert').remove();
    }, 3000);
};

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

    //Validate the object
    if (!isbn || !author || !title) {

        //Error alert
        ui.showAlert('Please fill all the fields', 'error');
    } else {   
        //Add book to list
        ui.addBook(book);
        //Show success alert
        ui.showAlert('Book information saved successfully', 'success');
        //Clear Fields
        ui.clearFields();
    }

});
