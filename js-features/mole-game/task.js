const dead = document.getElementById("dead");
const lost = document.getElementById("lost");


let counterDead = 0;
let counterLost = 0;

document.addEventListener('click', function (event) {

    if (event.target.className.includes( 'hole_has-mole' )) {
        dead.textContent = ++counterDead;
    } 
    if (event.target.className.includes( 'hole' ) && !event.target.className.includes( 'hole_has-mole' )) {
        lost.textContent = ++counterLost;
    }
    
    if (counterDead >= 10) {
        counterDead = 0;
        counterLost = 0;
        dead.textContent = counterDead;
        lost.textContent = counterLost;
        alert("Победа!");
    }

    if (counterLost >= 5) {
        counterDead = 0;
        counterLost = 0;
        dead.textContent = counterDead;
        lost.textContent = counterLost;
        alert("Поражение");
    }
})

 