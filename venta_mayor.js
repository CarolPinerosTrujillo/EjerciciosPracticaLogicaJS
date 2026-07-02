//EJERCICIO 5 CUAL ES LA VENTA MAYOR

const ventasSemana = [120000, 95000, 150000, 80000, 200000];
let mayor = 0;

for (i = 0; i < ventasSemana.length; i++) {
  for (j = 0; j < ventasSemana.length; j++) {
    if (ventasSemana[i] > ventasSemana[j]) {
      mayor = ventasSemana[i];
      console.log("El mayor es: ", mayor);
    }
  }
}

// console.log("Lista de precios: ", ventasSemana);
console.log("la venta mayor es: ", mayor);

console.log("========================================");
//SEGUNDA SOLUCIÓN 

const ventas = [120000, 95000, 150000, 80000, 200000];

// Supones que el mayor es el primero
let mayor1 = ventas[0];

// Recorres el arreglo
for (let venta of ventas) {
  if (venta > mayor1) {
    mayor1 = venta; // actualizas si encuentras uno mayor
  }
}

console.log("La venta más alta fue:", mayor);