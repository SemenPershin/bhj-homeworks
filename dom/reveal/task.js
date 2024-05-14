const reveals = Array.from(document.getElementsByClassName("reveal"));

reveals.forEach((element) => {
    window.addEventListener("wheel", () => {
        let position = element.getBoundingClientRect();
        if (position['bottom'] > 0 && position['top'] < window.innerHeight) {
            element.classList.add("reveal_active");
        } else if (position['bottom'] < 0 || position['top'] > window.innerHeight) {
            element.classList.remove("reveal_active");
        }
    })
});