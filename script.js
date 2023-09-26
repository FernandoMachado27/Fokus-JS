const html = document.querySelector('html'); // referencia tag html
const focoBt = document.querySelector('.app__card-button--foco'); // referencia tag button pelo nome da classe
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image'); // referencia tag img pela classe
const titulo = document.querySelector('.app__title'); // referencia da tag h1 pelo nome da classe
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBt = document.querySelector('#start-pause'); //buscando por id
const iniciarOuPausarBt = document.querySelector('#start-pause span') // botão começar span
const alterarIconePlay = document.querySelector('.app__card-primary-butto-icon');
const tempoNaTela = document.querySelector('#timer');

const musicaFocoinput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');
const tempFinalizado = new Audio('/sons/beep.mp3');
const tempInicio = new Audio('/sons/play.wav');
const tempPause = new Audio('/sons/pause.mp3');

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

musica.loop = true;

musicaFocoinput.addEventListener('change', () => { // evento para trabalhar com input do tipo checkbox
    if(musica.paused){
        musica.play();
    } else {
        musica.pause();
    }
}) 

focoBt.addEventListener('click', () => { // passando uma função para quando ocorrer um click no botão
    alterarContexto('foco');
    focoBt.classList.add('active');
})

curtoBt.addEventListener('click', () => { 
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
})

longoBt.addEventListener('click', () => { 
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
})

function alterarContexto(contexto) {
    botoes.forEach(function (contexto){
        contexto.classList.remove('active'); // remove classe
    })
    html.setAttribute('data-contexto', contexto); // mudando o valor do data contexto, cor de fundo -> está no css
    banner.setAttribute('src', `/imagens/${contexto}.png`); // template string, inserindo junto de um elemento html, alterando a imagem
    switch (contexto) { // para mudar o título da página
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":    
            titulo.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta.</strong>
            `
            break;

        case "descanso-longo":    
            titulo.innerHTML = `
            Hora de voltar a superfície <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `    
        default:
            break;
    }
}

const contagemRegressiva = () => { // função contagem
    if(tempoDecorridoEmSegundos <= 0){
        //tempFinalizado.play();
        alert('Tempo finalizado');
        zerar();
        return;
    }

    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
}

startPauseBt.addEventListener('click', iniciarOuPausar); // quando tiver o evento de click chame a função contagem regressiva

function iniciarOuPausar() {
    if(intervaloId){
        tempPause.play();
        zerar();
        return;
    }
    tempInicio.play();
    intervaloId = setInterval(contagemRegressiva, 1000); // executa o metodo dentro deste periodo de tempo
    iniciarOuPausarBt.textContent = "Pausar";
    alterarIconePlay.setAttribute('src', `/imagens/pause.png`)
}

function zerar() {
    clearInterval(intervaloId);
    iniciarOuPausarBt.textContent = "Começar";
    alterarIconePlay.setAttribute('src', `/imagens/play_arrow.png`)
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = tempoDecorridoEmSegundos;
    tempoNaTela.innerHTML = `${tempo}`; // template string
}

mostrarTempo();
