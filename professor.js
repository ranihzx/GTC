const carrossel = document.querySelector('.innerCarrossel');
const btnEsq = document.querySelector('.slider.esquerda');
const btnDir = document.querySelector('.slider.direita');

let posicaoAtual = 0;
const miniaturas = carrossel.children;
const totalMiniaturas = miniaturas.length;

for (let i = 0; i < totalMiniaturas + 3; i++) {
    carrossel.appendChild(miniaturas[i].cloneNode(true));
}

function moverPara(direcao) {
    const larguraItem = miniaturas[0].offsetWidth + 20;

    posicaoAtual += direcao;
    
    carrossel.style.transform = `translateX(-${posicaoAtual * larguraItem}px)`;
    carrossel.style.transition = 'transform 0.5s ease';

    setTimeout(() => {
        if (posicaoAtual >= totalMiniaturas) {
            posicaoAtual = 0;
            carrossel.style.transform = `translateX(0)`;
            carrossel.style.transition = 'none';
        }
        if (posicaoAtual < 0) {
            posicaoAtual = totalMiniaturas - 1;
            carrossel.style.transform = `translateX(-${posicaoAtual * larguraItem}px)`;
        }
    }, 400);
}

btnDir.addEventListener('click', () => moverPara(1));
btnEsq.addEventListener('click', () => moverPara(-1));