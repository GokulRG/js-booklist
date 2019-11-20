//Converting the application to es6 code
//Book class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI class
class UI {
    static addBook(book) {
        const list = document.getElementById('book-list');

        //Create tr element
        const tableRow = document.createElement('tr');

        //Insert Columns
        tableRow.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a class='delete pointer' style="color: black;">X</a></td>
    `;

        list.appendChild(tableRow);
    }

    static showAlert(message, className) {
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
    }

    static deleteBook(target) {
        if (target.className === 'delete pointer') {
            if (confirm('Are you sure you want to remove this book?')) {
                target.parentElement.parentElement.remove();
                UI.showAlert('Book successfully removed', 'warning');
            }
        }
    }

    static clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }
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

    //Validate the object
    if (!isbn || !author || !title) {
        //Error alert
        UI.showAlert('Please fill all the fields', 'error');
    } else {
        //Add book to list
        UI.addBook(book);
        //Show success alert
        UI.showAlert('Book information saved successfully', 'success');
        //Clear Fields
        UI.clearFields();
    }
});

//Remember, Event Delegation needs to be performed for dynamic entries in the UI
document.getElementById('book-list').addEventListener('click', (event) => {
    event.preventDefault();
    UI.deleteBook(event.target);
});