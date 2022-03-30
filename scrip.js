const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img")

let idx = 0

function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 550}px`
}

setInterval(carrossel, 2500)

var dt=new Date();
var dia=dt.getDay();

var title = document.querySelector("#orçamento");

if(dia == 0){
    title.textContent = "domingo : atendimento 24h";
}
if(dia == 1){
    title.textContent = "segunda :  atendimento 08:30 - 18:00";
}
if(dia == 2){
    title.textContent = "terça :  atendimento 08:30 - 18:00";
}
if(dia == 3){
    title.textContent = "quarta :  atendimento 08:30 - 18:00";
}
if(dia == 4){
    title.textContent = "quinta :  atendimento  atendimento 08:30 - 18:00";
}
if(dia == 5){
    title.textContent = "sexta : atendimento 08:30 - 18:00";
}
if(dia == 6){
    title.textContent = "sábado : atendimento 08:30 - 18:00";
}