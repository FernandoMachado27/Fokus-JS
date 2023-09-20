const html = document.querySelector('html'); // referencia tag html
const focoBt = document.querySelector('.app__card-button--foco'); // referencia tag button pelo nome da classe
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image'); // referencia tag img pela classe

focoBt.addEventListener('click', () => { // passando uma função para quando ocorrer um click no botão
    alterarContexto('foco')
})

curtoBt.addEventListener('click', () => { 
    alterarContexto('descanso-curto')
})

longoBt.addEventListener('click', () => { 
    alterarContexto('descanso-longo')
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto); // mudando o valor do data contexto, cor de fundo -> está no css
    banner.setAttribute('src', `/imagens/${contexto}.png`); // template string, inserindo junto de um elemento html, alterando a imagem
}
