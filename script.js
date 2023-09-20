const html = document.querySelector('html'); // referencia tag html
const focoBt = document.querySelector('.app__card-button--foco'); // referencia tag button pelo nome da classe
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image'); // referencia tag img pela classe

focoBt.addEventListener('click', () => { // passando uma função para quando ocorrer um click no botão
    html.setAttribute('data-contexto', 'foco'); // mudando o valor do data contexto, cor de fundo, para descanso curto -> está no css
    banner.setAttribute('src', '/imagens/foco.png') // alterando imagem quando clico em foco
})

curtoBt.addEventListener('click', () => { 
    html.setAttribute('data-contexto', 'descanso-curto'); 
    banner.setAttribute('src', '/imagens/descanso-curto.png')
})

longoBt.addEventListener('click', () => { 
    html.setAttribute('data-contexto', 'descanso-longo');
    banner.setAttribute('src', '/imagens/descanso-longo.png')
})
