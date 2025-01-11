function generaStringaCasuale(){
    let numeroRandom = Math.round(Math.random() * 10);
    
    if(numeroRandom >= 0 && numeroRandom <= 2){
        return "sasso";
    }else if(numeroRandom > 2 && numeroRandom <= 5){
        return "carta";
    }else{
        return "forbici"
    }
}

function pareggio(){
    document.getElementById("vintoOPerso").innerHTML = "It's a tie!";
}

let userScore = 0;
let pcScore = 0;

const sasso = document.getElementById("sasso");
const carta = document.getElementById("carta");
const forbici = document.getElementById("forbici");

sasso.addEventListener('click', ()=>{
    const sceltaPC = generaStringaCasuale();
    if(sceltaPC === "sasso"){
        pareggio();
    }else if(sceltaPC === "forbici"){
        document.getElementById("vintoOPerso").innerHTML = "You win! rock beats scissors";
        userScore++;
        document.getElementById("userScore").innerHTML = userScore;
    }else{
        document.getElementById("vintoOPerso").innerHTML = "You lose! paper beats rock";
        pcScore++,
        document.getElementById("pcScore").innerHTML = pcScore;
    }
});

carta.addEventListener('click', ()=>{
    const sceltaPC = generaStringaCasuale();
    if(sceltaPC === "carta"){
        pareggio();
    }else if(sceltaPC === "sasso"){
        document.getElementById("vintoOPerso").innerHTML = "You win! paper beats rock";
        userScore++;
        document.getElementById("userScore").innerHTML = userScore;
    }else{
        document.getElementById("vintoOPerso").innerHTML = "You lose! scissors beats paper";
        pcScore++,
        document.getElementById("pcScore").innerHTML = pcScore;
    }
});

forbici.addEventListener('click', ()=>{
    const sceltaPC = generaStringaCasuale();
    if(sceltaPC === "forbici"){
        pareggio();
    }else if(sceltaPC === "carta"){
        document.getElementById("vintoOPerso").innerHTML = "You win! scissors beats paper";
        userScore++;
        document.getElementById("userScore").innerHTML = userScore;
    }else{
        document.getElementById("vintoOPerso").innerHTML = "You lose! rock beats scissors";
        pcScore++,
        document.getElementById("pcScore").innerHTML = pcScore;
    }
});