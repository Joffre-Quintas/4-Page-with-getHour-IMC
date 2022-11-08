function time(){
    const moment = new Date();
    let hour = moment.getHours();    
    let mensageReception = document.getElementById("time");
    if(hour >= 0 && hour < 12){
        mensageReception.innerHTML = `Bom dia! Agora são ${hour} horas.`
        document.body.style.background = "#fdfd96"
    }else if(hour < 18){
        mensageReception.innerHTML = `Boa tarde! Agora são ${hour} horas.`
        document.body.style.background = "#f67828"
    }else{
        mensageReception.innerHTML = `Boa noite! Agora são ${hour} horas.`
        document.body.style.background = "#003153"
        document.body.style.color = "#ffffff";
    }
}
const calcular = document.getElementById('calcular'); //btn


function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('result');

    if(nome != '' && altura != '' && peso != ''){
       const valorIMC = peso/(altura*altura).toFixed(1);
       let classificacao = "";
       if(valorIMC < 18.5){
        classificacao = "Abaixo do peso"
       }else if(valorIMC < 24.9){
       classificacao = "com o Peso Normal"
       }else if(valorIMC < 34.9){
        classificacao = "obeso nível 1"
       }else if(valorIMC < 39.9){
        classificacao = "obeso npivel 2"
       }
       resultado.innerHTML = `${nome}, você está ${classificacao}`

    }else{
        resultado.innerHTML = "Preencha todos os campos!" 
    }
}

calcular.addEventListener('click', imc);
