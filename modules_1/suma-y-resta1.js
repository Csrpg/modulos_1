export function sumar(e) {
    e.preventDefault();

    const numA=parseInt(e.target.numA.value) 
    const numB=parseInt(e.target.numB.value)
    document.getElementById("resultado-suma").textContent =
        `Resultado: ${numA + numB}`;

    e.target.reset();
}




export function restar(e) {
    e.preventDefault();

    const numC=parseInt(e.target.numC.value) 
    const numD=parseInt(e.target.numD.value)
    document.getElementById("resultado-resta").textContent =
        `Resultado: ${numC - numD}`;

    e.target.reset();
}