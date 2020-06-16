//Primero item
var btn1 = document.querySelector('#btn-item1');
btn1.addEventListener('click', () => alert("Alô mundo!"));
//Segundo item
var btn2 = document.getElementById("btn-item2");
function buildText(){
    var inputItem2 = document.getElementById("input-item2");
    var funcReturn = 'O número informado foi '+inputItem2.value;
    alert(funcReturn);
}
btn2.addEventListener('click', buildText);
//Terceiro item
var btn3 = document.getElementById('btn-item3');
function addOperation(){
    var num1 = Number(document.getElementById('n1-item3').value);
    var num2 = Number(document.getElementById('n2-item3').value);
    var sum = num1+num2;
    alert("A soma é "+sum);
}
btn3.addEventListener('click', addOperation);
//Quarto item
var btn4 = document.getElementById('btn-item4');
function scoreAverage(){
    var score1 = Number(document.getElementById('n1-item4').value);
    var score2 = Number(document.getElementById('n2-item4').value);
    var score3 = Number(document.getElementById('n3-item4').value);
    var score4 = Number(document.getElementById('n4-item4').value);
    var average = (score1+score2+score3+score4)/4;
    alert("A média dos bimestres é "+average);
}
btn4.addEventListener('click', scoreAverage);
//Quinto item
var btn5 = document.getElementById('btn-item5');
function convertMToCm(){
    var m = Number(document.getElementById('n1-item5').value);
    var cm = m*100;
    alert(m+'m corresponde(m) à '+cm+'cm.')
}
btn5.addEventListener('click', convertMToCm);
//Sexto item
var btn6 = document.getElementById('btn-item6');
function circleArea(){
    var radius = Number(document.getElementById('n1-item6').value);
    var area = Math.PI * Math.pow(radius, 2);
    console.log(area);
    alert('A area do circulo é de '+Math.round(area*100)/100);
}
btn6.addEventListener('click', circleArea);
//Sétimo item
var btn7 = document.getElementById('btn-item7');
function squareArea(){
    var height = Number(document.getElementById('n1-item7').value);
    var area = Math.pow(height, 2)*2;
    alert('O dobro da área do quadrado é '+area);
}
btn7.addEventListener('click',squareArea);
//Oitavo item
var btn8 = document.getElementById('btn1-item8');
function calculatePayment(){
    var paymentPerHour = Number(document.getElementById('n1-item8').value);
    var hours = Number(document.getElementById('n2-item8').value);
    var payment = paymentPerHour * hours;
    alert("O seu salário no referido mes é de "+payment);
}
btn8.addEventListener('click', calculatePayment);
//Nono item - C = (5 * (F-32) / 9)
var btn9 = document.getElementById('btn1-item9');
function convertFarenheitToCelsius(){
    var f = Number(document.getElementById('n1-item9').value);
    var c = (5 * (f- 32) / 9);
    alert("O resultado é "+c+'C°');
}
btn9.addEventListener('click',convertFarenheitToCelsius);
//Decimo item
var btn10 = document.getElementById('btn1-item10');
function convertCelsiusToFarenheit(){
    var c = Number(document.getElementById('n1-item10').value);
    var f = 32 + ((c*9)/5);
    alert("O resultado é "+f+"F");
}
btn10.addEventListener('click', convertCelsiusToFarenheit);
//Décimo primeiro item
var btn11 = document.getElementById('btn1-item11');
function itemEleven(){
    var n1 = parseInt(document.getElementById('n1-item11').value);
    var n2 = parseInt(document.getElementById('n2-item11').value);
    var n3 = Number(document.getElementById('n3-item11').value);
    var finalMessage = "";
    //primeiro subitem
    var aux = (2*n1) * (2 / n2);
    finalMessage+='O produto do dobro do primeiro com metade do segundo - '+ aux+'\n';
    //segundo subitem
    aux = (3*n1) + n3;
    finalMessage+='A soma do triplo do primeiro com o terceiro - '+ aux + '\n';
    //terceiro subitem
    aux = Math.pow(n3, 3);
    finalMessage+='O terceiro elevado ao cubo - '+ aux;
    console.log(finalMessage);
    alert(finalMessage);
}
btn11.addEventListener('click', itemEleven);
//Décimo segundo item (72.7*altura) - 58
var btn12 = document.getElementById('btn1-item12');
function idealWeight(){
    var height = Number(document.getElementById('n1-item12').value);
    var iw = (72.7 * height)-58;
    alert('Seu peso ideal é '+ Math.round((iw*100)/100)+'kg');
}
btn12.addEventListener('click', idealWeight);