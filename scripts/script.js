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
//Décimo segundo item (72.7*altura) - 58 - MELHORAR FUNCTION PRA NAO REPETIR
var btn12 = document.getElementById('btn1-item12');
function idealWeight(){
    var height = Number(document.getElementById('n1-item12').value);
    var iw = (72.7 * height)-58;
    alert('Seu peso ideal é '+ Math.round((iw*100)/100)+'kg');
}
btn12.addEventListener('click', idealWeight);
//Décimo terceiro item
var btn13 = document.getElementById('btn1-item13');
function idealWeightGender(){
    var height = Number(document.getElementById('n1-item13').value);
    var iwm = Math.round(((72.7 * height)-58)*100)/100;
    var iww = Math.round(((62.1*height) - 44.7)*100)/100;
    alert("Pesos ideais: \nHomem: "+iwm+"\nMulher: "+iww);
}
btn13.addEventListener('click', idealWeightGender);
//Décimo quarto item
var btn14 = document.getElementById('btn1-item14');
function calculateFee(){
    var fishTotal = Number(document.getElementById('n1-item14').value);
    if(fishTotal>50){
        var excesso = fishTotal - 50;
        var multa = (Math.round((excesso*4)*100))/100;
        var message = 'O total de peixe trazido foi '+fishTotal+"kg";
        message+= "\nO excesso foi de "+excesso+"kg e a multa é de R$"+multa;
        alert(message);
    }else{
        alert("O total de peixe trazido ("+fishTotal+"kg) não excedeu o limite");
    }
}
btn14.addEventListener('click', calculateFee);
//Decimo quinto item
var btn15 = document.getElementById('btn1-item15');
function calculateLiquidPayment(){
    var hrs = Number(document.getElementById('n1-item15').value);
    var cost = Number(document.getElementById('n2-item15').value);
    var gp = hrs*cost;
    var ir = gp*0.11;
    var inss = gp*0.08;
    var sindicate = gp*0.05;
    var lp = gp - ir - inss - sindicate;
    var message = "O relatório do pagamento consiste em:\n";
    message+= "Salário bruto: R$"+gp+"\n";
    message+="IR: R$"+ir+'\n';
    message+="INSS: R$"+inss+'\n';
    message+="Sindicato: R$"+sindicate+'\n';
    message+="Salario Líquido: R$"+lp;
    alert(message);
}
btn15.addEventListener('click', calculateLiquidPayment);