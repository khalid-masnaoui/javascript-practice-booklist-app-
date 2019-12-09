window.onload = function() {
    const search = document.querySelector(".search-book");
    const add = document.querySelector("#add-book");
    const form = document.querySelector("form");
    const sub = document.querySelector(".add");
    const li = document.querySelectorAll("li");
    const ul = document.querySelector("ul");
    const para = document.querySelectorAll("ul p");
    const button = document.querySelectorAll("ul span");
    //add book
    form.addEventListener("submit", addbook);

    function addbook(e) {
        e.preventDefault();
        let value = add.value;
        if (value == "") {
            alert("not valid");
        } else {
            const li = document.createElement("li");
            const P = document.createElement("p");
            const span = document.createElement("span");
            const value2 = document.createTextNode(value);
            // const button2 = document.createElement("button");
            const delet = document.createTextNode("delete");
            const bookname3 = document.createTextNode("bookname");
            span.className = "delete";
            P.className = "bookname";
            P.appendChild(value2);
            span.appendChild(delet);
            li.appendChild(P);
            li.appendChild(span);
            ul.appendChild(li);

            add.value = "";




        }
    };

    //remove book
    ul.addEventListener("click", function(e) {
        if (e.target.className == "delete") {
            const hj = e.target.parentElement;
            ul.removeChild(hj);
        }
    })

    /*--------- adding an element ---cant listen to a click event directly --- use paarent --propagation-----*/
    // button.forEach((btn) => {

    //     btn.addEventListener("click", removebook);

    //     function removebook() {
    //         btn.parentElement.remove();
    //         console.log("k");

    //     }
    // });

    //search
    search.addEventListener("keyup", (e) => {
        let val = e.target.value;

        para.forEach((r) => {
            if (val == "") {
                r.parentElement.style.display = "";
            } else if (r.textContent.toLowerCase().indexOf(val.toLowerCase()) == -1) {
                r.parentNode.style.display = "none";

            } else {
                r.parentElement.style.display = "";
            };
        });

    });

}