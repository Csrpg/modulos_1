import { sumar, restar } from "./suma-y-resta1.js";
import { multiplicar, dividir } from "./multiplicacion-y-division1.js";

document.getElementById("form-sumar")
.addEventListener("submit", sumar);

document.getElementById("form-restar")
.addEventListener("submit", restar);

document
.getElementById("form-multiplicar")
.addEventListener("submit", multiplicar);

document
.getElementById("form-dividir")
.addEventListener("submit", dividir);
