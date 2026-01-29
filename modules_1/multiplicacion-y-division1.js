export function multiplicar(e) {
    e.preventDefault();

    const numE=parseInt(e.target.numE.value) 
    const numF=parseInt(e.target.numF.value)
    document.getElementById("resultado-multiplicacion").textContent =
        `Resultado: ${numE * numF}`;

    e.target.reset();
}



export function dividir(e) {
    e.preventDefault();

    const numG=parseInt(e.target.numG.value) 
    const numH=parseInt(e.target.numH.value)
    document.getElementById("resultado-division").textContent =
        `Resultado: ${numG / numH}`;

    e.target.reset();
}