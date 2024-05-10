const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sound/luna-rise-part-one.mp3')
musica.loop = true

musicaFocoInput.addEventListener('change', ()=>{
    if(musica.paused){
        musica.play();
    } else {
        musica.pause();
    }
})

focoBt.addEventListener('click', ()=>{ //adiconaod evento de click
    alterarContexto('foco');// atribuir um atributo
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () =>{
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longBt.addEventListener('click', ()=> {
    alterarContexto('descanso-longo');
    longBt.classList.add('active')
})

function alterarContexto(contexto){ // function para automatizar as coisas
    botoes.forEach( function (contexto){
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/img/${contexto}.png`)
    switch (contexto) {
        case "foco":
                titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?,<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>`
        break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa.</strong>`
        break;
        default:
            break;
    }
}