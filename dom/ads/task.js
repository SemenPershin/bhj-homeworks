const rotatorCase = Array.from(document.getElementsByClassName("rotator__case"));
let currentElement = 0;

function newInerval() {
    let interval = setInterval(() => {
        if (currentElement < rotatorCase.length - 1) {
            rotatorCase[currentElement].classList.remove("rotator__case_active");
            currentElement++;
            rotatorCase[currentElement].classList.add("rotator__case_active");
            rotatorCase[currentElement].style.color = rotatorCase[currentElement].getAttribute("data-color")
            clearInterval(interval);
            newInerval();
        } else {
            rotatorCase[currentElement].classList.remove("rotator__case_active");
            currentElement = 0;
            rotatorCase[currentElement].classList.add("rotator__case_active");
            rotatorCase[currentElement].style.color = rotatorCase[currentElement].getAttribute("data-color")
            clearInterval(interval);
            newInerval();
        }
    }, Number(rotatorCase[currentElement].getAttribute("data-speed")))
    
}

newInerval();

