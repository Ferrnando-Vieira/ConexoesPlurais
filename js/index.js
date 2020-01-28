var deadline = new Date("Jan 30, 2020 19:30:00").getTime(); 
var x = setInterval(function() { 
    var now = new Date().getTime(); 
    var t = deadline - now; 
    var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((t % (1000 * 60)) / 1000); 
    document.getElementById("day-count").innerHTML=days;
    document.getElementById("hour-count").innerHTML=hours;
    document.getElementById("minute-count").innerHTML=minutes;
    document.getElementById("second-count").innerHTML=seconds;
}, 1000);

function to_event() {
    const now = document.getElementById('home');
    now.classList.remove('active');
    now.classList.remove('show');
    document.getElementById('evento').setAttribute('class', 'tb-pane active show');

    const link = document.getElementById('home-tab');
    link.classList.remove('active');
    link.classList.remove('show');
    document.getElementById('home-tab').setAttribute('aria-selected', 'false');
    document.getElementById('evento-tab').setAttribute('aria-selected', 'true');
    document.getElementById('evento-tab').setAttribute('class', 'nav-link active show');

    show_event();
}

function hide_event() {
    document.getElementById('evento').style.display='none'; 
}

function show_event() {
    document.getElementById('evento').style.display='block'; 
}