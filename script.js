const celElements = document.querySelectorAll("[data-celula]");
const container = document.querySelectorAll("[data-container]");
const winningmsgtext = document.querySelectorAll("[data-winning-message-text]")
const winningmessage = document.querySelectorAll("[data-winning]")
let isCircleTurn; 


const winningcombinations = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6],];



const startgame = () => {
    for (const celula of celElements) {
        celula.addEventListener("click", handleClick, {once: true});
    }
    isCircleTurn = false; 
    container.classList.add("x");
};
const endgame = (isdraw) => {
    if(isdraw) {
        winningmsgtext.innerText = 'Empate';
    } else {
        winningmsgtext.innerText = 'Vitória';
    }
};
const checkforwin = (courrenteplayer) => {
    return winningcombinations.some((combination) => {
        return combination.every((index) => {
            return celElements[index].classList.contains(courrenteplayer);
        } ); 
    });
};
const placemark = (celula, classtoAdd) => {
celula.classList.add(classtoAdd);
};
const swipemark = () => {
    isCircleTurn = !isCircleTurn;
    container.classList.remove('circle');
    container.classList.remove('x');
    if (isCircleTurn) {
        container.classList.add('x');
    } else {
        container.classList.add('circle');
    };
};

const handleClick = (e) => {
    //marcar o x ou circulo
    const celula = e.target;
    const classtoAdd = isCircleTurn ? "circle" : "x"; 
    celula.classList.add(classtoAdd);
    placemark(celula, classtoAdd);
    //verificar vitória 
    const ganhador = checkforwin(classtoAdd);
    if (ganhador) {
        window.alert('ganhou');
    }
    //verificar empate

    //mudar o símbolo
    swipemark();
    }
    startgame();


