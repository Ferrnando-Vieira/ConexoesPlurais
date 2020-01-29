var deadline = new Date('Jan 30, 2020 19:30:00').getTime(); 
var x = setInterval(function() { 
    var now = new Date().getTime(); 
    var t = deadline - now; 
    var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((t % (1000 * 60)) / 1000); 
    document.getElementById('day-count').innerHTML=days;
    document.getElementById('hour-count').innerHTML=hours;
    document.getElementById('minute-count').innerHTML=minutes;
    document.getElementById('second-count').innerHTML=seconds;
}, 1000);

var now = 0;
const change = document.getElementById('card-fliping');
const button = document.getElementById('btn-change');

function to_painel() {
    change.style.transform='rotateY(360deg)';
    setTimeout(function(){ to_info() }, 700);
    button.style.pointerEvents='none';
}

function to_info() {
    if (now === 0) {
        document.getElementById('img-event').setAttribute('src', 'assets/o-painel-foto.png');
        document.getElementById('anim-1').innerHTML='O Painel';
        document.getElementById('anim-2').innerHTML='O evento será dividido em dois Painéis. O primeiro o qual os convidados são CEOs, sócios e diretores de empresas no meio digital.';
        document.getElementById('anim-3').innerHTML='O segundo será sobre os profissionais digitais, que compartilharão suas experiências no mercado digital.';
        now = 1;
    }
    else {
        document.getElementById('img-event').setAttribute('src', 'assets/o-evento-foto.png');
        document.getElementById('anim-1').innerHTML='O Evento';
        document.getElementById('anim-2').innerHTML='Conexões digitais, tecnologia, novas profissões e exigências do mercado. Os tempos mudaram, e a revolução digital transforma cada vez mais nosso modo de trabalhar.';
        document.getElementById('anim-3').innerHTML='No Conexões Plurais, convidamos especialistas no mercado digital para compartilharem suas experiências sobre como é trabalhar neste universo: vantagens, desvantagens, desafios e dicas para quem está iniciando a carreira no mercado de startups e empresas de tecnologia.';
        now = 0;
    }
    setTimeout(function(){ to_zero() }, 900);
}

function to_zero() {
    change.style.transitionDuration='0s';
    change.style.transform='rotateY(0)';
    setTimeout(function(){ to_reset() }, 100);
}

function to_reset() {
    change.style.transitionDuration='1.6s';
    button.style.pointerEvents='auto';
}

function to_ticket() {
    document.getElementById('ingressos').style.display='block'; 

    const now = document.getElementById('home');
    now.classList.remove('active');
    now.classList.remove('show');
    document.getElementById('ingressos').setAttribute('class', 'tb-pane active show');

    const link = document.getElementById('home-tab');
    link.classList.remove('active');
    link.classList.remove('show');
    document.getElementById('home-tab').setAttribute('aria-selected', 'false');
    document.getElementById('ingressos-tab').setAttribute('aria-selected', 'true');
    document.getElementById('ingressos-tab').setAttribute('class', 'nav-link active show');
}

function hide_ticket(val) {
    document.getElementById('ingressos').style.display='none'; 
    switch (val) {
        case 1:
            document.getElementById('body').style.background='#1C24EC';
            break;
        case 2:
            document.getElementById('body').style.background='#FFF';
            break;
        case 3:
            document.getElementById('body').style.background='#1C24EC';
            break;
        case 4:
            document.getElementById('body').style.background='#1C24EC';
            break;
    };
}

function show_ticket() {
    document.getElementById('ingressos').style.display='block'; 
    document.getElementById('body').style.background='#FFD9D9';
}