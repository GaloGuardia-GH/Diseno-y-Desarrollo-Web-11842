const nombre = prompt("Ingrese su nombre:");
const apellido = prompt("Ingrese su apellido:");
const fechaNacimiento = prompt("Ingrese su fecha de nacimiento (formato: AAAA-MM-DD):");

alert("¡Bienvenida/o, " + nombre + " " + apellido + "!");

const nacimiento = new Date(fechaNacimiento);
const hoy = new Date();
// Diferencia en milisegundos
const diferencia = hoy - nacimiento;
// Convertir la diferencia a días
const diasVividos = Math.floor(diferencia / (1000 * 60 * 60 * 24));

alert("Has vivido aproximadamente " + diasVividos + " días.");