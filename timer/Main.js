const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const timer = document.getElementById("timer");

let tempoDelTimer;
let millisecondi = 0;
let secondi = 0;
let minuti = 0;
let ore = 0;

start.addEventListener('click', ()=>{
    startTimer();
});

stop.addEventListener('click', ()=>{
    stopTimer();
});

reset.addEventListener('click', ()=>{
    resetTimer();
});

function startTimer(){

    tempoDelTimer = setInterval(()=>{

        millisecondi++;

        if(millisecondi === 100){
            millisecondi = 0;
            secondi++;
        }else if(secondi == 60){
            millisecondi = 0;
            secondi = 0;
            minuti++;
        }else if(minuti == 60){
            millisecondi = 0;
            secondi = 0;
            minuti = 0;
            ore++;
        }else if(ore == 99){
            millisecondi = 0;
            secondi = 0;
            minuti = 0;
            ore = 0;
        }

        let formatMillisecondi = (millisecondi > 10) ? `${millisecondi}` : `0${millisecondi}`;
        let formatSecondi = (secondi > 10) ? `${secondi}` : `0${secondi}`;
        let formatMinuti = (minuti > 10) ? `${minuti}` : `0${minuti}`;
        let formatOre = (ore > 10) ? `${ore}` : `0${ore}`;


        timer.textContent = `${formatOre}:${formatMinuti}:${formatSecondi}.${millisecondi}`;
    }, 10);

    start.disabled = true;
    stop.disabled = false;
}

function stopTimer(){
    clearInterval(tempoDelTimer, 0);
    stop.disabled = true;
    start.disabled = false;
}

function resetTimer(){
    millisecondi = 0;
    secondi = 0;
    minuti = 0;
    ore = 0;
    timer.textContent = `00:00:00`;

    clearInterval(tempoDelTimer, 0);

    stop.disabled = true;
    start.disabled = false;
}