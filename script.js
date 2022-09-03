const celElements = document.querySelectorAll("[data-celula]");

let isCircleTurn; 
const handleClick = (e) => {
    //marcar o x ou circulo
    const celula = e.target;
    const classtoAdd = isCircleTurn ? "circle" : "x"; 
    celula.classList.add(classtoAdd);
    //verificar vitória 

    //verificar empate

    //mudar o símbolo
    }
for (const celula of celElements) {
    celula.addEventListener("click", handleClick, {once: true});
}


