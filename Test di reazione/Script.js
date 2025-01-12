let millisecondi = 0;
let schiacciaUnaVolta = false;
let tempoRandom = Math.floor(((Math.random() * 9) + 2) * 1000);
let tempoPassato;
let dueH1 = document.getElementsByClassName('h1');

let tempoPrimaVerde = setInterval(()=>{
    document.body.style.backgroundColor = 'green';
    tempoPassato = setInterval(()=>{
        millisecondi++;
    }, 10);
},tempoRandom);

document.addEventListener('click', (event)=>{
    if(schiacciaUnaVolta == false){
        console.log('ciao');
        document.body.style.backgroundColor = 'black';
        document.getElementById('primoP').textContent = `ci hai messo ${millisecondi} millisecondi`;
        clearInterval(tempoPassato);
        clearInterval(tempoPrimaVerde);
        dueH1.remove();
        schiacciaUnaVolta = true;
    }

}, {once : true});