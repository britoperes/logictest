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
