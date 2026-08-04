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


function crearSala(filas:number , columnas:number): number[][] {
  let cineInicial:number[][] = [];
  for(let row = 0; row < filas; row++){
    cineInicial[row] = []
    for(let colum = 0; colum < columnas ; colum++){
      cineInicial[row][colum] = 0;
    }
  }
  return cineInicial;
}
let prueba = crearSala(5,8)
console.log(prueba)