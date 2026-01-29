// export function calcular(e,) {
//     e.preventDefault();

//     const numA = Number(e.target.numA.value);
//     const numB = Number(e.target.numB.value);

//     const suma1 = suma(numA, numB);
//     const resta1 = resta(numA, numB);
//     const multiplicacion1 = multiplicacion(numA, numB);
//     const division1 = division(numA, numB);

//     document.getElementById("resultado_op").innerHTML = `
//         <p>Suma: ${suma1}</p>
//         <p>Resta: ${resta1}</p>
//         <p>Multiplicación: ${multiplicacion1}</p>
//         <p>División: ${division1}</p>
//     `;

//     e.target.reset();
// }


// function suma(a, b) {
//     return a + b;
// }

// function resta(a, b) {
//     return a - b;
// }

// function multiplicacion(a, b) {
//     return a * b;
// }

// function division(a, b) {
//     if (b === 0) {
//         return "No se puede dividir entre 0";
//     }
//     return a / b;

// }



export function calcular(e, resultadoElemento) {
    e.preventDefault();

    const numA = Number(e.target.numA.value);
    const numB = Number(e.target.numB.value);

    resultadoElemento.innerHTML = `
        <p>Suma: ${numA + numB}</p>
        <p>Resta: ${numA - numB}</p>
        <p>Multiplicación: ${numA * numB}</p>
        <p>División: ${numB === 0 ? "No se puede dividir entre 0" : numA / numB}</p>
    `;

    e.target.reset();
}

// codigo no funciona arreglar