//INGRESO DE DATOS PERSONALES
alert("Bienvenidos las preguntitas random");
//+-*/%
alert("PRIMERA PREGUNTA RANDOM: Vamos a calcular 2 suma, resta, multiplicación, división y módulo de dos número");
var numero1 = parseFloat(prompt('Ingrese su primer número'));
var numero2 = parseFloat(prompt('Ingrese su segundo número'));
var multi = numero1 * numero2;
var divi = (numero1 / numero2).toFixed(1);
var suma = numero1 + numero2;
var resta = numero1 - numero2;
var mod = numero1 % numero2;
//grados
alert("SEGUNDA PREGUNTA RANDOM: vamos a transformar un valor a grados Kelvin y Fahrenheit, para eso ingresa un valor en Celsius");
var celsius = parseFloat(prompt('Ingresa los grados celsius'));
const kelvin = 273.15;
var resultKelvin = (celsius + kelvin).toFixed(2);
var resultFahren = ((celsius * (9 / 5)) + 32).toFixed(1);
//días a años, semanas, días
alert("TERCERA PREGUNTA RANDOM: vamos a transformar días a cantidad de años, semanas y días");
var dias = parseInt(prompt('Ingrese los días a calcular'));
const diasAnio = 365;
const diaSemana = 7;
var anio = parseInt(dias / diasAnio);
var sobra = parseInt(dias % diasAnio);
var semana = parseInt(sobra / diaSemana);
var diaSobrante = parseInt(sobra % diaSemana);

//5 números
alert("CUARTA PREGUNTA RANDOM: ingresa 5 número para sumarlos y sacar su promedio");
var num1 = parseFloat(prompt('Ingresa el primer número'));
var num2 = parseFloat(prompt('Ingresa el primer número'));
var num3 = parseFloat(prompt('Ingresa el primer número'));
var num4 = parseFloat(prompt('Ingresa el primer número'));
var num5 = parseFloat(prompt('Ingresa el primer número'));
var sumaCinco = num1 + num2 + num3 + num4 + num5;
var promCinco = (sumaCinco / 5).toFixed(1);
alert("GRACIAS, AHORA VAMOS A CALCULAR... te mostraremos en pantalla los resultados");

//utilizando bootstrap se genera el diseño de la aplicación
document.write('<section class="container m-5">');
document.write(`<div><h1>PREGUNTAS RANDOM!!</h1><h2>Ingresaste como primer número: ${numero1} y segundo número: ${numero2}</h2><p>el valor de la suma es ${suma} </p><p>el valor de la resta es ${resta} </p><p>el valor de la multiplicación es ${multi} </p><p>el valor de la división es ${divi} </p><p>el valor de la módulo es ${mod} </p></div><div><h2>${celsius} ° celsius es:</h2><p>${resultKelvin} ° kelvin</p><p>${resultFahren} ° fahrenheit </p></div><div><h2>${dias}  días son</h2><p>${anio}  años, ${semana}  semanas y ${diaSobrante}  días </p></div><div><h2>Entre los números: ${num1} , ${num2} , ${num3} , ${num4}  y ${num5}</h2>   <p>La suma es: ${sumaCinco}</p><p>Su promedio es: ${promCinco}  </p></div>`);
document.write('</section>');