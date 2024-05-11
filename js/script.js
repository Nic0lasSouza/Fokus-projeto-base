const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBtn = document.querySelector('#start-pause');
const iniciarOuPausarBtn = document.querySelector('#start-pause span')
const iniciarOuPausarIcon = document.querySelector('.app__card-primary-butto-icon')

const tempoNaTela = document.querySelector('#timer')

const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sound/luna-rise-part-one.mp3')
musica.loop = true

let tempoDecorridoEmSegundos = 1500;
let intervaloId= null;

musicaFocoInput.addEventListener('change', ()=>{
    if(musica.paused){
        musica.play();
    } else {
        musica.pause();
    }
})

focoBt.addEventListener('click', ()=>{ //adiconaod evento de click
    tempoDecorridoEmSegundos = 1500;
    alterarContexto('foco');// atribuir um atributo
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () =>{
    tempoDecorridoEmSegundos = 300;
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longBt.addEventListener('click', ()=> {
    tempoDecorridoEmSegundos = 900;
    alterarContexto('descanso-longo');
    longBt.classList.add('active')
})

function alterarContexto(contexto){ // function para automatizar as coisas
    mostrarTempo()
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

const startMusic = new Audio('/sound/play.wav');
const pauseMusic = new Audio('/sound/pause.mp3');
const acabouTempo = new Audio('/sound/beep.mp3');

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        acabouTempo.play()
        alert('Tempo Finalizado');
        zerar();
        return
    }
    tempoDecorridoEmSegundos -=1;
    mostrarTempo();
}

startPauseBtn.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar(){
    if(intervaloId){
        pauseMusic.play();
        zerar();
        return
    }
    startMusic.play()
    iniciarOuPausarBtn.textContent = `Pausar`;
    iniciarOuPausarIcon.setAttribute('src', '/img/pause.png');
    intervaloId = setInterval(contagemRegressiva, 1000);
}

function zerar(){
    clearInterval(intervaloId)
    iniciarOuPausarBtn.textContent= `Começar`
    iniciarOuPausarIcon.setAttribute('src', '/img/play_arrow.png')
    intervaloId = null;
}

function mostrarTempo(){
    const tempo = new Date(tempoDecorridoEmSegundos * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML=`${tempoFormatado}`
}

mostrarTempo()