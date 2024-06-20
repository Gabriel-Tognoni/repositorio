let numero1 = document.querySelector('#entrada1');
let numero2 = document.querySelector('#entrada2') ;
let resultado = document.querySelector('#resultado');
let resultadob = document.querySelector('#resultadob');

function somar(){
    let final = Number(numero1.value) + Number(numero2.value);
    resultado.innerHTML  = final;
}

function subtrair(){
    let final = Number(numero1.value) - Number(numero2.value);
    resultado.innerHTML = final;
}

function divisao(){
    let final = Number(numero1.value) / Number(numero2.value);
    resultado.innerHTML = final;
}

function multiplicacao(){
    let final = Number(numero1.value) * Number(numero2.value);
    resultado.innerHTML = final;
}