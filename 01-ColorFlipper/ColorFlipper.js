const color = document.querySelector(".color");
const nameColor = document.querySelector(".color-name");
const btnGenerate = document.querySelector(".btn-generate");

const symbols = "0123456789ABCDEF";

btnGenerate.addEventListener("click", () => {
  let newColor = "#";
  for (let i = 0; i < 6; i++) {
    newColor += symbols[Math.floor(Math.random() * 16)];
  }
  nameColor.innerHTML = newColor;
  color.style.backgroundColor = newColor;
});