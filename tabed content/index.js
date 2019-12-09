window.onload = function() {
    const lis = document.querySelectorAll("li");
    const panels = document.querySelectorAll(".panel");
    lis.forEach((li) => {
        li.addEventListener("click", (e) => {
            const element = e.target.getAttribute("data-target");
            console.log(element);
            panels.forEach((panel) => {

                if (panel.getAttribute("id") == element) {
                    panel.classList.add("active");

                } else {
                    panel.classList.remove("active");
                }
            })
        })
    })


}