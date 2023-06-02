// variables
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const msg = document.querySelector('#returnGame');
const restart = document;



// jump animation
const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500)
};
document.addEventListener('keydown', function(event) {
    if (event.key === ' ' || event.key === 'ArrowUp' || event.key === 'w') {
        jump();
    }
})



// score
let tempo = 0;  
let temporizador = setInterval( () => {
    tempo = tempo + 1000;
    let score = Math.floor((tempo / 100 / 10));
    document.getElementById('score').innerHTML = score;
}, 300)    



// game over
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './imagens/game over.png';
        mario.style.width = '120px';
        mario.style.marginLeft = '10px';
        
        msg.style.display = 'flex';

        // pausing score and animations
        clearInterval(temporizador);
        clearInterval(loop);
        
        // event to restart game
        restart.addEventListener('keydown', function(event) {
            if (event.key) {
              location.reload()
            }
        })
    }

}, 10);