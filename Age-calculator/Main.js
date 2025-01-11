const button = document.getElementById("button");
const span = document.getElementById("span");

button.addEventListener('click', ()=>{
    const data = document.getElementById("data").value;
    if(data === ""){
        alert("Devi mettere una data!");
    }else{
        const dataInput = new Date(data);
        let calcolaAnni = new Date().getFullYear() - dataInput.getFullYear();
        document.getElementById("span").innerHTML = `${calcolaAnni} ${calcolaAnni > 1 ? "years" : "year"} old`;
    }
});