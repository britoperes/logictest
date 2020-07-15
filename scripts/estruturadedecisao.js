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
//Setimo item
var btn7 = document.getElementById('btn1-item7');
function biggestMinorNumber(){
    var array = [];
    array.push(Number(document.getElementById('n1-item7').value));
    array.push(Number(document.getElementById('n2-item7').value));
    array.push(Number(document.getElementById('n3-item7').value));
    var aux = array[0];
    for(i of array){
        if(i > aux){
            aux = i;
        }
    }
    alert('O maior número é '+aux);
    aux = array[0];
    for(i of array){
        if(i < aux){
            aux=i;
        }
    }
    alert('O menor número é '+aux);
}
btn7.addEventListener('click',biggestMinorNumber);
//Oitavo item
var btn8 = document.getElementById('btn1-item8');
function lowestPrice(){
    var array = [];
    array.push(Number(document.getElementById('n1-item8').value));
    array.push(Number(document.getElementById('n2-item8').value));
    array.push(Number(document.getElementById('n3-item8').value));
    var aux = array[0]+1;
    var position = 0;
    for(var i = 0;i <array.length;i++){
        if(array[i]<aux){
            aux = array[i];
            position = array.indexOf(aux);
            console.log(position);
            position++;
            console.log(position);
        }
    }
    alert('O produto mais barato é o '+position+' da lista custando '+aux);
}
btn8.addEventListener('click', lowestPrice);
//Nono item
var btn9 = document.getElementById('btn1-item9');
function lToB(){
    var array = [];
    array.push(Number(document.getElementById('n1-item9').value));
    array.push(Number(document.getElementById('n2-item9').value));
    array.push(Number(document.getElementById('n3-item9').value));
    array.sort(function(a,b){return b-a;});
    //Explicação do array.sort() - http://www.javascriptkit.com/javatutors/arraysort.shtml
    alert("Os numeros em ordem descrescente são:"+array[0]+", "+array[1]+ " e "+array[2]);
}
btn9.addEventListener('click', lToB);
//Décimo item
var btn10 = document.getElementById('btn1-item10');
function idTurn(){
    var turn = document.getElementById('t1-item10').value;
    switch (turn) {
        case 'M':
            alert("Bom dia!");            
            break;
        case 'V':
            alert("Boa tarde!");            
            break;
        case 'N':
            alert("Boa noite!");            
            break;
    
        default:
            alert("Valor inválido!");
            break;
    }
}
btn10.addEventListener('click',idTurn);
//Décimo primeiro item
var btn11 = document.getElementById('btn1-item11');
function readjustment(){
    var raise = 0;
    var salary = Number(document.getElementById('n1-item11').value);
    if (salary <= 280){
        raise = 0.2;
    }else if(salary <=700){
        raise = 0.15;
    }else if(salary <=1500){
        raise = 0.1;
    }else {
        raise = 0.05;
    }
    var raiseValue = salary * raise;
    var newSalary = salary+raiseValue;
    alert('Salário antes do aumento: R$'+salary+
    '\nO percentual aplicado foi: '+(raise*100)+'%'+
    '\nO valor do aumento foi de R$'+raiseValue+
    '\nO valor do novo salário é R$'+newSalary);
}
btn11.addEventListener('click',readjustment);
//Decimo segundo item
var btn12 = document.getElementById('btn1-item12');
var message = '';
function liquidSalary(){
    var h = Number(document.getElementById('n1-item12').value);
    var c = Number(document.getElementById('n2-item12').value);
    var bS = h*c;
    var ir;
    if(bS <= 900){
        ir = 0;
    }else if(bS<=1500){
        ir = 0.05;
    }else if(bS <=2500){
        ir = 0.1;
    }else{
        ir = 0.2;
    }
    var irValue = bS*ir;
    var sindicate = bS * 0.03;
    var fgts = bS * 0.11;
    var totalDiscount = irValue + sindicate;
    var lS = bS - totalDiscount;
    message = 'Salário Bruto: ('+h+'*'+c+'): R$'+bS;
    message+= '\n(-) IR ('+(ir*100)+'%): R$'+irValue;
    message+= '\n(-) Sindicato (3%): R$'+sindicate;
    message+= '\nFGTS (11%): R$'+fgts;
    message+= '\nTotal de descontos: R$'+totalDiscount;
    message+= '\nSalário líquido: R$'+lS;
    alert(message);
}
btn12.addEventListener('click', liquidSalary);
//Décimo terceiro item
var btn13 = document.getElementById('btn1-item13');
function weekDay(){
    var dayNumber = Number(document.getElementById('n1-item13').value);
    switch (dayNumber) {
        case value: 1
            alert("Domingo");
            break;
        case value: 2
            alert("Segunda");
            break;
        case value: 3
            alert("Terça");
            break;
        case value: 4
            alert("Quarta");
            break;
        case value: 5
            alert("Quinta");
            break;
        case value: 6
            alert("Sexta");
            break;
        case value: 7
            alert("Sábado");
            break;
    
        default:
            alert('Número inválido');
            break;
    }
}
btn13.addEventListener('click', weekDay);
//Decimo quarto item
var btn14 = document.getElementById('btn1-item14');
function grade(){
    var n1 = Number(document.getElementById('n1-item14').value);
    var n2 = Number(document.getElementById('n2-item14').value);
    var avg = (n1+n2)/2;
    var mediaAproveitamento = '';
    var msgAprovado = ''
    if(avg<4){
        mediaAproveitamento = "E";
    }else if(avg<6){
        mediaAproveitamento = 'D';
    }else if(avg<7.5){
        mediaAproveitamento = 'C';
    }else if (avg<9){
        mediaAproveitamento = 'B';
    }else{
        mediaAproveitamento = 'A';
    }
    if(mediaAproveitamento == 'A'||mediaAproveitamento == 'B'||mediaAproveitamento == 'C'){
        msgAprovado = "APROVADO";
    } else {
        msgAprovado = "REPROVADO";
    }
    var msg = 'Nota 1: '+n1;
    msg+= '\nNota 2: '+n2;
    msg+= '\nMédia: '+avg;
    msg+= '\nConceito correspondente: '+mediaAproveitamento;
    msg+= '\n'+msgAprovado;
    alert(msg);
}
btn14.addEventListener('click', grade);
//Décimo quinto item
var btn15 = document.getElementById('btn1-item15');
function triangle(){
    var sides=[];
    sides.push(Number(document.getElementById('n1-item15').value));
    sides.push(Number(document.getElementById('n2-item15').value));
    sides.push(Number(document.getElementById('n3-item15').value));
    var aux = 0;
    var arrayAux = [];
    if(sides[0]+sides[1]>=sides[2]){
        for(var i = 0;i<sides.length;i++){
            for(side of sides){
                if(side==sides[i]){
                    aux++;
                }
            }
            arrayAux.push(aux);
                aux = 0;
        }
        if(arrayAux.indexOf(3)!=-1){
            alert("É um triangulo equilatero!");
        } else if (arrayAux.indexOf(2)!=-1){
            alert("É um triangulo isóceles!");
        } else {
            alert("É um triangulo escaleno!");
        }
    } else {
        alert("Não é um triangulo");
    }
}
btn15.addEventListener('click',triangle);
//Decimo sexto item
var btn16 = document.getElementById('btn1-item16');
function bhaskara(){
    var a = Number(document.getElementById('n1-item16').value);
    if(a == 0){
        alert("A equação não é do segundo grau!");
    } else {
        var b = Number(document.getElementById('n2-item16').value);
        var c = Number(document.getElementById('n3-item16').value);
        var result1;
        var result2;
        var delta = Math.pow(b, 2) - (4*a*c);
        console.log(delta);
        if(delta<0){
            alert("O delta é negativo, e por isso nao possui raizes reais");
        } else if(delta == 0){
            result1 = (b*-1)/(2*a);
            alert("A equação possui apenas uma raiz, que é a "+result1);
        } else {
            result1 = ((b*-1) + Math.sqrt(delta))/(2*a);
            console.log(Math.sqrt(delta));

            result2 = ((b*-1) - Math.sqrt(delta))/(2*a);
            alert('As raízes da equação são: '+result1+' e '+result2);
        }
    }
}
btn16.addEventListener('click', bhaskara);
//Décimo sétimo item
var btn17 = document.getElementById('btn1-item17');
function leapYear(){
    var year = Number(document.getElementById('n1-item17').value);
    if(year%400==0){
        alert("É ano bissexto");
    } else if(year%100==0){
        alert("Não é ano bissexto");
    } else if(year%4==0){
        alert("É ano bissexto");
    } else {
        alert("Não é ano bissexto");
    }
}
btn17.addEventListener('click',leapYear);
//Decimo oitavo item
var btn18 = document.getElementById('btn1-item18');
function validDate(){
    var day = Number(document.getElementById('n1-item18').value);
    var month = Number(document.getElementById('n2-item18').value);
    var year = Number(document.getElementById('n3-item18').value);

    if(day>31){
        alert("Não é uma data valida");
    } else if (month>12){
        alert("Não é uma data valida");
    } else if (year<1900){
        alert("Não é uma data valida");
    } else {
        alert("É uma data válida");
    }
}
btn18.addEventListener('click', validDate);
//Decimo nono item
var btn19 = document.getElementById('btn1-item19');
function readNumber(){
    var number = Number(document.getElementById('n1-item19').value);
    var centena = parseInt(number / 100);
    var dezena = parseInt((number - (centena*100))/10);
    var unidade = number-((centena*100)+(dezena*10));
    var message = "";
    
    if(number>0&&number<1000){
        message+= number + '\n';
    if(centena==0){ //if das centenas
    } else if(centena ==1){
        message+="1 centena";
    } else {
        message+=centena+" centenas";
    }

    if(centena!=0 && dezena!=0 && unidade!=0){ //if da virgula
        message+=", "
    } else if(centena!=0 && dezena!=0 && unidade==0){
        message+=" e "
    }

    if(centena != 0 &&dezena==0 && unidade!=0){
        message+=' e ';
    } else if(dezena==0){ //if das centenas
    } else if(dezena ==1){
        message+="1 dezena";
    } else {
        message+=dezena+" dezenas";
    }

    if(dezena!=0 && unidade!=0){ //if do e
        message+=" e ";
    }

    if(unidade==0){ //if das centenas
    } else if(unidade ==1){
        message+="1 unidade";
    } else {
        message+=unidade+" unidades";
    }
    } else {
        message+="Numero inválido";
    }

    alert(message);


}
btn19.addEventListener('click',readNumber);
//Vigésimo item
var btn20 = document.getElementById('btn1-item20');
function checkAverageAgain(){
    var scores = [];
    scores.push(Number(document.getElementById('n1-item20').value));
    scores.push(Number(document.getElementById('n2-item20').value));
    scores.push(Number(document.getElementById('n3-item20').value));
    var avg = (scores.reduce((a,b) => a+b, 0))/(scores.length);
    if(avg == 10){
        alert("Aprovado com Distinção!");
    } else if (avg>=7 && avg <10){
        alert("Aprovado");
    } else {
        alert("Reprovado");
    }
    console.log(avg);
}
btn20.addEventListener('click', checkAverageAgain);
//Vigesimo primeiro item - ver os ifs com o japones
var btn21 = document.getElementById('btn1-item21');
function saqueNotas(){

    function extenso(numero){
        switch (numero) {
            case 1:
                return "uma nota"
                break;
            case 2:
                return "duas notas"
                break;
            case 3:
                return "tres notas"
                break;
            case 4:
                return "quatro notas"
                break;
            case 5:
                return "cinco notas"
                break;
            case 6:
                return "seis notas"
                break;
            case 7:
                return "sete notas"
                break;
            case 8:
                return "oito notas"
                break;
            case 9:
                return "nove notas"
                break;
        
            default:
                break;
        }
    }
    var saque = Number(document.getElementById('n1-item21').value);
    if(saque>0&&saque<=600){
        var cem = parseInt(saque/100);
        var aux = saque%100;
        var cinquenta = parseInt(aux/50);
        aux = aux%50;
        var dez = parseInt(aux/10);
        aux = aux%10;
        var cinco = parseInt(aux/5);
        aux = aux%5;
        var um = aux;
        var message = "Para sacar a quantia de "+saque+" reais, o programa fornece ";

        //if da centena
        if(cem!=0){
            message+=extenso(cem)+" de 100 reais";
            if(cinquenta==0 && dez == 0 && cinco==0 &&um==0){
            } else if ((cinquenta!=0 && dez == 0 && cinco==0 &&um==0) ||
                       (cinquenta==0 && dez != 0 && cinco==0 &&um==0) ||
                       (cinquenta==0 && dez == 0 && cinco!=0 &&um==0) ||
                       (cinquenta==0 && dez == 0 && cinco==0 &&um!=0)){
                           message+=" e ";
                       }else{
                           message+=", ";
                       }
        }
        //if da virgula ou e

        

        //if do cinquenta
        if(cinquenta!=0){
            message+=extenso(cinquenta)+ " de 50 reais";
            if(cinquenta==0 && dez == 0 && cinco==0 &&um==0){
            } else if ((dez != 0 && cinco==0 &&um==0) ||
                       (dez == 0 && cinco!=0 &&um==0) ||
                       (dez == 0 && cinco==0 &&um!=0)){
                           message+=" e ";
                       }else{
                           message+=", ";
                       }  
        }
        //if da virgula ou e - função com mesmo nome e parametros diferentes
        //sobrecarga de função!
              
        //if do dez
        if(dez!=0){
            message+=extenso(dez)+" de 10 reais";
            if(dez==0 && cinco==0 &&um==0){
            } else if ((cinco==0 &&um!=0) ||
                       (cinco!=0 &&um==0)){
                           message+=" e ";
                       }else{
                           message+=", ";
                       }   
        }
        //mais um if de virgula ou e
        

        //if do cinco
        if(cinco!=0){
            message+=extenso(cinco)+" de 5 reais";
            if(cinco==0&&um==0){
            } else if (um!=0)
            {
                           message+=" e ";
                       }
        }

        //if da virgula ou do e
        
    

        //if do um
        if (um!=0){
            message+=extenso(um)+" de 1 real";
        }

        console.log(saque);
        console.log(extenso(cem) + " "+ (cem*100));
        console.log(cinquenta + " "+ (cinquenta*50));
        console.log(dez + " "+ (dez*10));
        console.log(cinco + " "+ (cinco*5));
        console.log(um);
        console.log("total "+((cem*100)+(cinquenta*50)+(dez*10)+(cinco*5)+um))
        alert(message);

    }else{
        alert("Saque inválido");
    }
}
btn21.addEventListener('click', saqueNotas);
//Vigesimo segundo item
var btn22 = document.getElementById('btn1-item22');
function parOuImpar(){
    var numero = Number(document.getElementById('n1-item22').value);
    if((numero%2)==0){
        alert("Número par");
    } else {
        alert("Número impar");
    }
}
btn22.addEventListener('click', parOuImpar);
//Vigesimo terceiro item
var btn23 = document.getElementById('btn1-item23');
function decimal(){
    var numero = Number(document.getElementById('n1-item23').value);
    var arredondado = parseInt(numero);

    if((numero-arredondado)==0){
        alert("Não é decimal");
    } else {
        alert("É decimal");
    }
}
btn23.addEventListener('click', decimal);
//Vigesimo quarto item
var btn24 = document.getElementById('btn1-item24');
function operacao(){
    var n1 = Number(document.getElementById('n1-item24').value);
    var n2 = Number(document.getElementById('n2-item24').value);
    var operacao = document.getElementById('t1-item24').value;
    function validacao(numero){
        var message = "";
        if((numero%2)==0){
            message+="É par \n"
        } else {
            message+="É impar \n"
        }

        if(numero>=0){
            message+="É positivo\n";
        } else {
            message+="É negativo\n"
        }
        var arredondado = parseInt(numero);
        if((numero-arredondado)==0){
            message+="É inteiro";
        } else {
            message+="É decimal";
        }
        return message;
    }
    if(operacao == '+'){
        alert("Resultado = "+(n1+n2)+"\n"+validacao((n1+n2)));
    } else if(operacao == '-'){
        alert("Resultado = "+(n1-n2)+"\n"+validacao((n1-n2)));
    } else if(operacao == '*'){
         alert("Resultado = "+(n1*n2)+"\n"+validacao((n1*n2)));
    } else if(operacao == '/'){
        alert("Resultado = "+(n1/n2)+"\n"+validacao((n1/n2)));
    } else {
        alert("Operador inválido");
    }
}
btn24.addEventListener('click', operacao);