window.onload = function() {
    const inptitle = document.querySelector("#title");
    const inpauth = document.querySelector("#author");
    const inpisbn = document.querySelector("#isbn");
    const tbody = document.querySelector("tbody");
    const form = document.querySelector("form");
    const rmvd = document.querySelector(".rmvd");
    const added = document.querySelector(".added");
    const notvalid = document.querySelector(".notvalid");


    // book class
    class Book {
        constructor(title, author, isbn) {
            this.title = title;
            this.author = author;
            this.isbn = isbn;

        }
    };
    // local storage

    class store {
        static getbooks() {
            let books;
            if (localStorage.getItem("books") === null) {
                books = [];

            } else {
                books = JSON.parse(localStorage.getItem("books"))
            };
            return books;

        };
        static addlocal(book) {
            const books = store.getbooks();
            books.push(book);
            localStorage.setItem("books", JSON.stringify(books));

        };
        static removelocal(isbn) {
            const books = store.getbooks("books");
            books.forEach((book, index) => {
                if (book.isbn === isbn) {
                    books.splice(index, 1);

                };
                localStorage.setItem("books", JSON.stringify(books));
            });

        };
    };
    //UI class : handle Ui tasks
    class UI {
        // for local storage
        static displaybook() {
            const books = store.getbooks();
            books.forEach((book) => {
                UI.addfirstbooks(book);
            })
        };
        static addfirstbooks(obj) {
            const tr = document.createElement("tr");
            tr.className = "add";
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const td3 = document.createElement("td");
            const td4 = document.createElement("td");
            td4.textContent = "X";
            td4.className = "delete";
            td1.textContent = obj.title;
            td2.textContent = obj.author;
            td3.textContent = obj.isbn;
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tbody.appendChild(tr);

        }

        static addbook(e) {
            e.preventDefault();
            const newBook = new Book(inptitle.value, inpauth.value, inpisbn.value);

            if (newBook.title == "" || newBook.author == "" || newBook.isbn == "") {
                UI.showalert(notvalid);
            } else {
                const tr = document.createElement("tr");
                tr.className = "add";
                const td1 = document.createElement("td");
                const td2 = document.createElement("td");
                const td3 = document.createElement("td");
                const td4 = document.createElement("td");
                td4.textContent = "X";
                td4.className = "delete";
                td1.textContent = newBook.title;
                td2.textContent = newBook.author;
                td3.textContent = newBook.isbn;
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tbody.appendChild(tr);
                UI.clearfiled();
                UI.showalert(added);
                store.addlocal(newBook);



            };
        };
        static clearfiled() {
            inpauth.value = "";
            inptitle.value = "";
            inpisbn.value = "";
        };

        static removebook(e) {
            if (e.target.className == "delete") {
                const f = e.target.parentNode.children[2];;
                store.removelocal(f.textContent);
                e.target.parentNode.remove();
                UI.showalert(rmvd);



            }
        };
        static showalert(x) {
            x.style.display = "block";
            setTimeout(() => {
                x.style.display = "";

            }, 3000)
        }
    }
    // displaybooks
    UI.displaybook();

    //add book
    form.addEventListener("submit", UI.addbook);


    //remove a book
    tbody.addEventListener("click", UI.removebook);


}
