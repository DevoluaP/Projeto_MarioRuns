const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const msg = document.querySelector('#returnGame');
const restart = document;

const jump = () => {
    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');
        setTimeout(() => mario.classList.remove('jump'), 500);
    }
};

document.addEventListener('keydown', (event) => {
    if (event.key === ' ' || event.key === 'ArrowUp' || event.key === 'w') {
        jump();
    }
});

document.addEventListener('touchstart', () => {
    jump();
});

let tempo = 0;
let temporizador = setInterval(() => {
    tempo += 1000;
    let score = Math.floor((tempo / 100 / 10));
    document.getElementById('score').innerHTML = score;
}, 300);

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const marioWidth = mario.offsetWidth;
    const marioHeight = mario.offsetHeight;

    if (pipePosition <= marioWidth && pipePosition > 0 && marioPosition < (marioHeight - 20)) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './imagens/game over.png';
        mario.style.width = `${marioWidth * 0.8}px`;
        mario.style.marginLeft = '10px';
        msg.style.display = 'flex';

        clearInterval(temporizador);
        clearInterval(loop);
        restart.addEventListener('keydown', () => location.reload());
        restart.addEventListener('touchstart', () => location.reload());
    }
}, 10);