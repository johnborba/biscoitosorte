//variáveis
const frases = [
  "A vida é como uma bicicleta. Para ter equilíbrio, você precisa se manter em movimento.",
  "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
  "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
  "A persistência é o caminho do êxito.",
  "Acredite em si mesmo e tudo será possível.",
  "Se você quer vencer na vida, deve se permitir fracassar de vez em quando."
];

const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let indicee = Math.floor(Math.random() * frases.length);


//functions
function hidescreen1(event){
  event.preventDefault()

  screen2.classList.remove("hide")
  screen1.classList.add("hide")
}

function fraseAleatoria() {
  return frases[indicee];
}

function hidescreen2(event){

  screen2.classList.add("hide")
  screen1.classList.remove("hide")
  
}

//eventos
btnTry.addEventListener('click', hidescreen1)
btnReset.addEventListener('click', hidescreen2)

screen2.querySelector("p").innerText = `${fraseAleatoria(frases)}`
