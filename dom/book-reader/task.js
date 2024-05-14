const fontSize = Array.from(document.getElementsByClassName("font-size"));
const book = document.getElementById("book");
const fontColor = Array.from(document.getElementsByClassName("book__control_color"));
const bookColor = Array.from(document.getElementsByClassName("book__control_background"));


fontSize.forEach((element) => {
    element.addEventListener("click", (event) =>{
        event.preventDefault();
        for (let i in fontSize){
            fontSize[i].classList.remove("font-size_active");
        }
        element.classList.add("font-size_active");

        if (element.getAttribute("data-size") == "small") {
            book.classList.remove("book_fs-big");
            book.classList.add("book_fs-small");
        } else if (element.getAttribute("data-size") == "big") {
            book.classList.remove("book_fs-small");
            book.classList.add("book_fs-big");
        } else {
            book.classList.remove("book_fs-small");
            book.classList.remove("book_fs-big");
        }
    })
})

fontColor.forEach((elemenFontColor) => {
    let arrayColorToggle = Array.from(elemenFontColor.querySelectorAll(".color"))
    arrayColorToggle.forEach((element) => {
        element.addEventListener("click", (event) => {
            event.preventDefault();
            for (let i of arrayColorToggle) {
                i.classList.remove("color_active")
            }
            element.classList.add("color_active");

            if (element.getAttribute("data-text-color") == "black") {
                book.classList.remove("book_color-gray");
                book.classList.remove("book_color-whitesmoke");
                book.classList.add("book_color-black");
            }
            if (element.getAttribute("data-text-color") == "gray") {
                book.classList.remove("book_color-whitesmoke");
                book.classList.remove("book_color-black");
                book.classList.add("book_color-gray");
            }
            if (element.getAttribute("data-text-color") == "whitesmoke") {
                book.classList.remove("book_color-gray");
                book.classList.remove("book_color-black");
                book.classList.add("book_color-whitesmoke");
            }
        })
    })
})

bookColor.forEach((elemenBookColor) => {
    let arrayBookColorToggle = Array.from(elemenBookColor.querySelectorAll(".color"))
    arrayBookColorToggle.forEach((element) => {
        element.addEventListener("click", (event) => {
            event.preventDefault();
            for (let i of arrayBookColorToggle) {
                i.classList.remove("color_active")
            }
            element.classList.add("color_active");

            if (element.getAttribute("data-bg-color") == "black") {
                book.classList.remove("book_bg-gray");
                book.classList.remove("book_bg-white");
                book.classList.add("book_bg-black");
            }
            if (element.getAttribute("data-bg-color") == "gray") {
                book.classList.remove("book_bg-black");
                book.classList.remove("book_bg-white");
                book.classList.add("book_bg-gray");
            }
            if (element.getAttribute("data-bg-color") == "white") {
                book.classList.remove("book_bg-gray");
                book.classList.remove("book_bg-black");
                book.classList.add("book_bg-white");
            }
        })
    })
})