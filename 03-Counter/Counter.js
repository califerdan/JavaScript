const count = document.querySelector('.value');
const btnDecrease = document.querySelector('.btn-decrease');
const btnReset = document.querySelector('.btn-reset');
const btnIncrease = document.querySelector('.btn-increase');

btnDecrease.addEventListener('click',()=>{
  count.textContent = parseInt(count.textContent) - 1;
})

btnReset.addEventListener('click', ()=>{
  count.textContent = 0;
})

btnIncrease.addEventListener('click',()=>{
  count.textContent = parseInt(count.textContent) + 1;
})