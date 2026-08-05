if (typeof document !== "undefined") {
  import("./style.css").then(() => {
    const app = document.querySelector<HTMLParagraphElement>("#app");
    if (app) {
      app.textContent = "If you can see this, Tailwind is working.";
    }
  });
}

console.log("Hello from src/main.ts");

export {};

/*Creamos la sala de cine para 8 filas y 10 columnas*/ 
let filas: number = 8;
let columnas: number = 10;

const filasReal: number = filas + 1;
const columnasReal: number = columnas + 1;


function crearSala(filas:number , columnas:number): number[][] {
  let cineInicial:number[][] = [];
  for(let row = 0; row < filasReal; row++){
    cineInicial[row] = []
    for(let colum = 0; colum < columnasReal ; colum++){
      cineInicial[row][colum] = 0;
    }
  }
  return cineInicial;
}

/*Función para mostrar la sala de cine*/

function mostrarSala(sala:number[][]): string {
  let actualSala: string = "";
  let numeroFila: number = 1;
  let numeroColumna: number = 1;
  for(let row = 0; row < sala.length; row++){
    for(let colum = 0; colum < sala[row].length; colum++){
      if (row === 0 && colum === 0) {
        actualSala += "  ";
      }else if (row === 0) {
        actualSala += numeroColumna.toString() + " ";
        numeroColumna++;
      }else if (colum === 0) {
        actualSala += numeroFila.toString() + " ";
        numeroFila++;
      }else if(sala[row][colum] === 0){
        actualSala += "L ";
      }else{
        actualSala += "X ";
      }
    }
    actualSala += "\n";
  }
  return actualSala;
}

/*Función para reservar un asiento*/

function reservarAsiento(sala:number[][], fila:number, columna:number): number[][] {
  for(let row = 0; row < sala.length; row++){
    for(let colum = 0; colum < sala[row].length; colum++){
      if(row === fila && colum === columna){
        if(sala[row][colum] === 0){
          sala[row][colum] = 1;
          console.log(`Asiento reservado en la fila ${fila} y columna ${columna}`);
        }else if(sala[row][colum] === 1){
          console.log(`El asiento en la fila ${fila} y columna ${columna} ya está ocupado`);
        }
      }
    }
  }
  return sala;
}

/* Función para contar asientos libres y ocupados */
function contarAsientos(sala:number[][]): {libres: number, ocupados: number} {
  let libres: number = 0;
  let ocupados: number = 0;
  for(let row = 0; row< sala.length; row++){
    for (let colum = 0; colum < sala[row].length; colum++){
      if(sala[row][colum] === 1){
        ocupados++;
      } else if(sala[row][colum] === 0){
        libres++;
      }
    }
  }
  return {libres, ocupados};
}



let salaInicial = crearSala(filasReal, columnasReal);
let salaActual = mostrarSala(salaInicial);
console.log(salaActual);
let primeraReserva = reservarAsiento(salaInicial, 7, 7);
console.log(mostrarSala(primeraReserva));
let segundaReserva = reservarAsiento(salaInicial, 7, 7);
console.log(mostrarSala(segundaReserva));
let checkAsientos = contarAsientos(segundaReserva);
console.log(`Asientos libres: ${checkAsientos.libres}, Asientos ocupados: ${checkAsientos.ocupados}`);
