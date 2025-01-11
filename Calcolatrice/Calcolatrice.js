const buttonNumeri = document.getElementsByClassName("numeri");
const AC = document.getElementById("AC");

let arrayOperazioni = [document.getElementById("piu"), document.getElementById("meno"), document.getElementById("per"),
                        document.getElementById("diviso")];

let ultimaOperazioneSchiacciata = "nessuna";
let primoValore;
let secondoValore;

const schermoRisultati = document.getElementById("schermoRisultati");

const piu = document.getElementById("piu");
const meno = document.getElementById("meno");
const per = document.getElementById("per");
const diviso = document.getElementById("diviso");
const uguale = document.getElementById("uguale");

//aggiunge l'evento ad ogni numero che quando viene schiacciato viene stampato sullo schermo
//se è la prima volta mette solo quello se è dal secondo in poi mette il numero di lato
for(let i = 0; i < buttonNumeri.length; i++){
    buttonNumeri[i].addEventListener('click', ()=>{
        if(schermoRisultati.textContent != "0"){
            schermoRisultati.textContent += buttonNumeri[i].textContent;
        }else{
            schermoRisultati.textContent = buttonNumeri[i].textContent;
        }
    });
}

for(let i = 0; i < arrayOperazioni.length; i++){
    arrayOperazioni[i].addEventListener('click', ()=>{
        ultimaOperazioneSchiacciata = (i == 0) ? "+" : (i == 1) ? "-" : (i == 2) ? "*" : "/";
        console.log(ultimaOperazioneSchiacciata);
    });
}

//mette a 0 dove si vedono i numeri
AC.addEventListener('click', ()=>{
    schermoRisultati.textContent = 0;
});

//mette sullo schermo il risultato dell'operazione
// uguale.addEventListener('click', ()=>{
//     schermoRisultati.textContent = ;
// });