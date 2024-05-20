//variáveis
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");


//functions
function hidescreen1(){
  screen2.classList.remove("hide")
  screen1.classList.add("hide")
}

//eventos
btnTry.addEventListener('click', hidescreen1)

