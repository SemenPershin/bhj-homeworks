const dropdown = Array.from(document.getElementsByClassName("dropdown"));

dropdown.forEach(element => {
    element.querySelector(".dropdown__value").onclick = function() {
        element.querySelector(".dropdown__list").classList.toggle("dropdown__list_active");
    }
    
    element.querySelectorAll(".dropdown__link").forEach(link => {
        link.addEventListener('click', function (event){
            event.preventDefault();
            element.querySelector(".dropdown__value").textContent = link.textContent;
            element.querySelector(".dropdown__list").classList.toggle("dropdown__list_active");
        })
    })
})





