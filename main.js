const imgCarrosel = document.querySelector(".img_carrosel");
const btProximo = document.querySelector(".bt_proximo");
const btAnterior = document.querySelector(".bt_anterior");
const txt = document.querySelector(".txt-mapa");

const colecaoImg = [
  {
    id: 1,
    img: "./assets/slimoMap.png",
    txt: "Slimo começa sua jornada na densa e enigmática parte do cosmos. Entre as estrelas imponentes, ele deve desviar dos obstáculos. O caminho está repleto de chaves escondidas entre a rochas exuberante, essenciais para desbloquear passagens secretas e avançar para o próximo estágio  Entretanto, Slimo não está sozinho na floresta. Criaturas misteriosas e veganas espreitam por entre as sombras",
  },
  {
    id: 2,
    img: "./assets/slimoMap2.jpeg",
    txt: "Após atravessar o Cosmos, Slimo se encontra em um Deserto Escaldante. Aqui, dunas de areia traiçoeiras e tempestades de areia ameaçam sua jornada. As chaves estão escondidas em oásis escassos e cavernas de cristais flamejantes, protegidas por criaturas ardilosas do deserto.",
  },
  {
    id: 3,
    img: "./assets/slimoMap3.jpeg",
    txt: "O desafio final leva Slimo ao próprio Inferno em Chamas. Entre rochas em chamas e nuvens de lava borbulhante, ele enfrenta um teste extremo. As chaves estão protegidas por Ha'miton furiosos e armadilhas diabólicas, exigindo coragem indomável para superar e alcançar a vitória.",
  },
];

let imgAtual = 0;

window.addEventListener("DOMContentLoaded", function () {
  mostrarImg(imgAtual);
});

function mostrarImg() {
  const item = colecaoImg[imgAtual];
  imgCarrosel.src = item.img;
  txt.textContent = item.txt;
}

btProximo.addEventListener("click", function () {
  imgAtual++;
  if (imgAtual > colecaoImg.length - 1) {
    imgAtual = 0;
  }
  mostrarImg();
});

btAnterior.addEventListener("click", function () {
  imgAtual--;
  if (imgAtual < 0) {
    imgAtual = colecaoImg.length - 1;
  }
  mostrarImg();
});
