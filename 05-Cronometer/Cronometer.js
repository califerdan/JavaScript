const horas = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');

const btnReset = document.querySelector('.btn_reset');
const btnPlay = document.querySelector('.btn_play');
const btnPause = document.querySelector('.btn_pause');

window.addEventListener('load', resetCrono);
btnPlay.addEventListener('click', playCrono);
btnPause.addEventListener('click', pauseCrono); 
btnReset.addEventListener('click', resetCrono);

let intervalo;

function playCrono() {
  if(!intervalo){
  intervalo = setInterval(correrReloj, 1000);
  }
}

function correrReloj(){
  segundos.textContent++;
  if (segundos.textContent > 59) {
    segundos.textContent = 0;
    minutos.textContent++;
    if (minutos.textContent > 59) {
      minutos.textContent = 0;
      horas.textContent++;
    }
  }
}

function pauseCrono() {
  clearInterval(intervalo);
  intervalo = null;
}

function resetCrono() {
  pauseCrono();
  segundos.textContent = 0;
  minutos.textContent = 0;
  horas.textContent = 0;
}