/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío'

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Elige el número "que te de la gana" del 1 al 10'

Para comparar que tipo de dato vota las variables:
console.log(typeof(numeroDeUsuario));
console.log(typeof(numeroSecreto));
*/

//let numeroSecreto = generarNumeroSecreto();
//let intentos = 1;

let numeroSecreto;
let intentos;
let numeroMaximo = 10;
let listaNumerosSorteados = [];

//console.log("El Número Secreto es: ",numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    //return Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    // Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
    // Si el número generado está incluído en la lista:
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado; 
        }

    } 
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    //console.log("Número de Intentos: ",intentos);

    if (numeroDeUsuario === numeroSecreto) {
       asignarTextoElemento('p', `¡Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}!`);

       document.getElementById('reiniciar').removeAttribute('disabled');
       
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número es MENOR');
        } else {
            asignarTextoElemento('p', 'El número es MAYOR');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    //let valorCaja = document.querySelector('#valorUsuario')
    document.querySelector('#valorUsuario').value = '';
    //valorCaja.value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', '¡Juego del adivinador!');
    asignarTextoElemento('p', `Elige un número del 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de números
    // Generar el número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); 
}

condicionesIniciales();

/*
asignarTextoElemento('h1', '¡Juego del adivinador!');
asignarTextoElemento('p', 'Elige el número "que te de la gana" del 1 al 10:');
*/

/*
let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value)

    if (numeroDeUsuario === numeroSecreto) {
       asignarTextoElemento('p', 'Acertaste el número' );
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor'); 
        } else {
            asignarTextoElemento('p', 'El número es mayor');
        }
    
    }
    return;
}

asignarTextoElemento('h1', '¡Juego del adivinador!');
asignarTextoElemento('p', 'Elige el número "que te de la gana" del 1 al 10:');
*/

/*
function mostarAlerta(){
    let ciudad = prompt("Por favor, ingresa el nombre de una ciudad de Brasil:");
   alert("Estuve en " + ciudad + " y me acordé de ti.");
} 
*/

/*
function mostarAlerta(){
    alert("AMO JS");
} 
*/

/*
function sumaDosNumeros(){
    let primerNumero = parseInt(prompt('Digite el primer numero'));
    let segunNumero = parseInt(prompt('Digite el segundo numero'));
    let resultado = primerNumero + segunNumero;
    //alert(resultado)
    alert(`La suma es: ${primerNumero} + ${segunNumero} = ${resultado}`)
}
*/

/*
function mostarMensajeEnLaConsola() {
    console.log('El botón fue clicado!')
}
*/

/*
function calcularPromedio(nota1, nota2, nota3, nota4){
        let promedio = (nota1 +  nota2 +  nota3 +  nota4)/4
        return promedio;
}

function verificarAprobacion(promedio){
         return promedio >= 5 ? “Aprobado” : “Reprobado”;
}
*/

/*
function calcularDobleTriple(numero) {
  const doble = numero * 2;
  const triple = numero * 3;

  return `El doble de ${numero} es ${doble} y el triple es ${triple}.`;
}

const numero = 5;
const resultado = calcularDobleTriple(numero);
console.log(resultado);

function calcularDoble(numero) {
  return numero * 2;
}

function calcularTriple(numero) {
  return numero * 3;
}

const numero = 5;
const doble = calcularDoble(numero);
const triple = calcularTriple(numero);

console.log(`El doble de ${numero} es ${doble} y el triple es ${triple}.`);
*/

/*
const nombre = "Juan";
const edad = 30;
const mensaje = `Hola, soy ${nombre} y tengo ${edad} años.`;
console.log(mensaje);

// Salida: Hola, soy Juan y tengo 30 años.
*/

/*
let listaCompras = [];

listaCompras.push("Manzana");
listaCompras.push("Arroz");
listaCompras.push("Leche");
listaCompras.push("Pan");
listaCompras.push("Carne");
*/

/*
Contexto: Imagina que eres una persona desarrolladora que trabaja para Buscante, una importante tienda en
línea de libros. Tu jefe te ha pedido que crees una función para sortear libros a los clientes. El sorteo
debe hacerse de manera que todos los libros tengan la oportunidad de ser sorteados al menos una vez, y 
después de eso, el sorteo debe comenzar de nuevo. Recordaste la lección sobre la adición de la variable
"numeroLimite" en el curso "Lógica de programación: explore funções e listas". ¿Cómo implementarás el 
sorteo del libro teniendo en cuenta lo que se enseñó?

function sortearLibro() {
    let libroElegido = parseInt(Math.random() * numeroLimite + 1);
    let cantidadDeLibrosSorteados = listaDeLibrosSorteados.length;
    if (cantidadDeLibrosSorteados == numeroLimite) {
        listaDeLibrosSorteados = [];
    }
    // Código omitido
}
*/

