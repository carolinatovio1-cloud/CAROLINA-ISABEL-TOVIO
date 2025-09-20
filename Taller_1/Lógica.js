// =================== INPUTS (pueden inventarlos) ===================
let edad = 30;            // Number 
let cantidadBoletos = 2;  // Number 
let sala = "IMAX";        // String 


// =================== FUNCIONES (declaraciones) ===================
// HOISTING: estas funciones pueden llamarse antes de su definición

// Función de saludo inicial
function mostrarSaludo() {
  return "Bienvenido al Cine!";
}

// Función para verificar la sala seleccionada y asignar precio unitario
function seleccionarSala(sala) {
  let precio = 0;
  let descripcion = "";

  switch (sala.toUpperCase()) {
    case "2D":
      precio = 8000;
      descripcion = "Sala 2D: Función estándar.";
      break;
    case "3D":
      precio = 12000;
      descripcion = "Sala 3D: Incluye gafas especiales.";
      break;
    case "IMAX":
      precio = 20000;
      descripcion = "Sala IMAX: Pantalla gigante y sonido envolvente.";
      break;
    case "VIP":
      precio = 25000;
      descripcion = "Sala VIP: Asiento reclinable y servicio a la mesa.";
      break;
    default:
      descripcion = "Sala no válida.";
  }

  return { precio, descripcion }; 
}

// Función para calcular descuento según la edad
function calcularDescuento(edad) {
  let descuento = 0;
  let mensaje = "";

  if (edad < 10) {
    descuento = 0.5; // 50%
    mensaje = "Aplica 50% de descuento por ser menor de 10 años.";
  } else if (edad >= 65) {
    descuento = 0.4; // 40%
    mensaje = "Aplica 40% de descuento por adulto mayor.";
  } else {
    mensaje = "No aplica descuento.";
  }

  return { descuento, mensaje };
}

// Función para calcular el total a pagar
function calcularTotal(precioUnitario, cantidadBoletos, descuento) {
  let total = precioUnitario * cantidadBoletos;
  let totalFinal = total - total * descuento;
  return totalFinal;
}


// =================== FLUJO PRINCIPAL ===================
function main() {
  // Mostrar saludo
  console.log(mostrarSaludo());

  // Selección de sala
  let { precio, descripcion } = seleccionarSala(sala);
  console.log( descripcion);

  // Verificar descuento por edad
  let { descuento, mensaje } = calcularDescuento(edad);
  console.log( mensaje);

  // Calcular el total
  let totalFinal = calcularTotal(precio, cantidadBoletos, descuento);

  // Mostrar resumen final
  console.log("Precio unitario: $" + precio);
  console.log("Cantidad de boletos: " + cantidadBoletos);
  console.log("Total a pagar: $" + totalFinal);
  console.log("Gracias por su compra. ¡Disfrute la función!");
}

// Ejecutar el programa
main();
