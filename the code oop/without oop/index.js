window.onload = function() {
    const inptitle = document.querySelector("#title");
    const inpauth = document.querySelector("#author");
    const inpisbn = document.querySelector("#isbn");
    const tbody = document.querySelector("tbody");
    const form = document.querySelector("form");
    const rmvd = document.querySelector(".rmvd");
    const added = document.querySelector(".added");
    const notvalid = document.querySelector(".notvalid");



    //add book
    form.addEventListener("submit", addbook);

    function addbook(e) {
        e.preventDefault();

        const title = inptitle.value;
        const auth = inpauth.value;
        const isbn = inpisbn.value;
        if (title == "" || auth == "" || isbn == "") {
            notvalid.style.display = "block";
            setTimeout(() => {
                notvalid.style.display = "none";

            }, 3000);

        } else {
            const tr = document.createElement("tr");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            const td3 = document.createElement("td");
            const td4 = document.createElement("td");
            const td4content = document.createTextNode("X");
            tr.className = "add";
            td4.className = "delete";
            td1.textContent = title;
            td2.textContent = auth;
            td3.textContent = isbn;
            td4.appendChild(td4content);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tbody.appendChild(tr);
            inpauth.value = "";
            inpisbn.value = "";
            inptitle.value = "";
            added.style.display = "block";
            setTimeout(() => {
                added.style.display = "none";

            }, 3000);

        };

    };

    //remove a book
    tbody.addEventListener("click", function(e) {
        if (e.target.className == "delete") {
            e.target.parentNode.style.display = "none";
            rmvd.style.display = "block";
            setTimeout(() => {
                rmvd.style.display = "none";

            }, 3000);
        }
    })


}