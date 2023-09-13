const contenedorPalabra = document.querySelector(".contenedor-palabra");
const resultado = document.querySelector(".resultado");
const btnComprobar = document.querySelector(".btn-comprobar");
const btnRendirse = document.querySelector(".btn-rendirse");

const url = "./countries.json";
let paises = [];
const numPaises = 10;
let solucion;

const randomNumber = () => Math.floor(Math.random() * numPaises);

async function fetchPaises() {
  const response = await fetch(url);
  const data = await response.json();
  paises = data.map((pais) => pais.name);
  generarPais();
}

window.addEventListener("load", fetchPaises);

function generarPais() {
  solucion = paises[randomNumber()].toLowerCase();
  const salida = solucion
    .split("")
    .map((letra) => {
      if (letra === " ") {
        return `<span></span>`;
      }
      return `<input type='text' maxlength='1' minlength='1' required class="bg-transparent w-6 border-b-4 border-black text-center uppercase text-2xl focus:outline-0"></input>`;
    })
    .join("");
  contenedorPalabra.innerHTML = salida;
}

const handleComprobar = () => {
  const palabra = contenedorPalabra.querySelectorAll("input");
  const respuesta = Array.from(palabra)
    .map(letra => letra.value)
    .join("")
    .toLowerCase();
    
  if (respuesta === solucion.replace(/\s+/g, "")) {
    resultado.innerHTML = "✔";
    nuevoJuego();
  } else {
    resultado.innerHTML = "❌";
  }
};

btnComprobar.addEventListener("click", handleComprobar);

btnRendirse.addEventListener("click", () => {
  resultado.innerHTML = "❌";
  nuevoJuego();
});

function nuevoJuego() {
  setTimeout(() => {
    generarPais();
    resultado.innerHTML = "";
  }, 2000);
}
