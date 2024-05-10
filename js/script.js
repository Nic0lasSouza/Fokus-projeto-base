const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');

focoBt.addEventListener('click', ()=>{ //adiconaod evento de click
    alterarContexto('foco');// atribuir um atributo
})

curtoBt.addEventListener('click', () =>{
    alterarContexto('descanso-curto')
})

longBt.addEventListener('click', ()=> {
    alterarContexto('descanso-longo')
})

function alterarContexto(contexto){ // function para automatizar as coisas
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/img/${contexto}.png`)
}