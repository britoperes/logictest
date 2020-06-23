//Primeiro item
var btn1 = document.getElementById("btn1-item1");
function greatest(){
    var n1 = Number(document.getElementById('n1-item1').value);
    var n2 = Number(document.getElementById('n2-item1').value);
    if(n1>n2){
        alert(n1);
    }  else {
        alert(n2);
    }
}
btn1.addEventListener('click',greatest);
//Segundo item
var btn2 = document.getElementById('btn1-item2');
function validationPositive(){
    var number = Number(document.getElementById('n1-item2').value);
    number >= 0 ? alert("Maior que zero") : alert("Menor que zero");
}
btn2.addEventListener('click', validationPositive);
//Terceiro item
var btn3 = document.getElementById('btn1-item3');
function validationSex(){
    var input = document.getElementById('t1-item3').value;
    switch (input) {
        case "F":
            alert('Feminino');
            break;
        case "M":
            alert("Masculino");
    
        default:
            alert("Sexo Inválido");
            break;
    }
}
btn3.addEventListener('click',validationSex);
//Quarto item
var btn4 = document.getElementById('btn1-item4');
function vOrC(){
    var letter = document.getElementById('t1-item4').value;
    var vowels = ['a','e','i','o','u'];
    console.log(letter);
    if (vowels.indexOf(letter)==-1){
        alert('É consoante');
    }else{
        alert("É vogal!");
    }
}
btn4.addEventListener('click', vOrC);
//Quinto item
var btn5 = document.getElementById('btn1-item5');
function checkAverage(){
    var scores = [];
    scores.push(Number(document.getElementById('n1-item5').value));
    scores.push(Number(document.getElementById('n2-item5').value));
    var avg = (scores.reduce((a,b) => a+b, 0))/(scores.length);
    if(avg == 10){
        alert("Aprovado com Distinção!");
    } else if (avg>=7 && avg <10){
        alert("Aprovado");
    } else {
        alert("Reprovado");
    }
}
btn5.addEventListener('click',checkAverage);
//Sexto item
var btn6 = document.getElementById('btn1-item6');
function biggestNumber(){
    var array = [];
    array.push(Number(document.getElementById('n1-item6').value));
    array.push(Number(document.getElementById('n2-item6').value));
    array.push(Number(document.getElementById('n3-item6').value));
    
    alert(Math.max(array));
}
btn6.addEventListener('click', biggestNumber);