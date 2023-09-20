const html = document.querySelector('html'); // referenciat tag html
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');

focoBt.addEventListener('click', () => { // passando uma função para quando ocorrer um click no botão
    html.setAttribute('data-contexto', 'foco')
})

curtoBt.addEventListener('click', () => { 
    html.setAttribute('data-contexto', 'descanso-curto') // mudando o valor do data contexto para descanso curto -> está no css
})

longoBt.addEventListener('click', () => { 
    html.setAttribute('data-contexto', 'descanso-longo')
})
