//Ejercicio 4 promedio ventas
const ventasSemana = [120000, 95000, 150000, 80000, 200000];
let aux = 0;

for (i = 0; i < ventasSemana.length; i++) {
  aux = aux + ventasSemana[i];
  console.log("Ganancias totales hasta el día ", i + 1, " son: ", aux);
}
aux = aux / ventasSemana.length;
console.log("Promedio de ventas semanales: ", aux);