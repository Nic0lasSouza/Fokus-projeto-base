const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');

focoBt.addEventListener('click', ()=>{ //adiconaod evento de click
    html.setAttribute('data-contexto', 'foco') ;// atribuir um atributo
    banner.setAttribute('src', '/img/foco.png')
})

curtoBt.addEventListener('click', () =>{
    html.setAttribute('data-contexto', 'descanso-curto');
    banner.setAttribute('src', '/img/descanso-curto.png')
})

longBt.addEventListener('click', ()=> {
    html.setAttribute('data-contexto', 'descanso-longo');
    banner.setAttribute('src', '/img/descanso-longo.png')
})