//Primeiro item
const ex1 = function(){
    let valid= false;
    while(valid==false){
        let valordigitado = parseInt(window.prompt('informe o valor'))
        if(valordigitado >=0 && valordigitado<=10){
            valid= true;
        }else{
            alert('valor invalido')
            valid =false;
        }
    }
}
//Segunda item
const ex2 = function(){
    let valid= false;
    while(valid==false){
        let nome = window.prompt('informe o nome')        
        let senha = window.prompt('informe a senha')

        if(nome!=senha){
            alert("sucesso caraio")
            valid= true;
        }else{
            alert('valor invalido')
            valid =false;
        }
    }
}
//Terceiro item
const ex3 = function(){
    let valid = false;
    while(valid==false){
        let nome = window.prompt("Informe o nome");
        let idade = parseInt(window.prompt("Informe a idade"));
        let salario = parseInt(window.prompt("Informe o salario"));
        let sexo = window.prompt("Informe o sexo");
        let civil = window.prompt("Informe o estado civil");

        if(
            nome.length>3 &&
            (idade>=0 &&idade<=150) &&
            salario>0 &&
            (sexo=="F" || sexo=="M") &&
            (civil == 's' ||civil == 'c' ||civil == 'v' ||civil == 'd')
        ){
            alert("cadastro valido")
            valid=true;
        }else{
            alert("cadastro invalido")
        }

    }
}
//Quarto item
const ex4 = function(){
        let pa = 80000;
        let pb = 200000;
        let years = 0;
        while(pa<pb){
            pa*=1.03;
            pb*=1.015
            years++;
        }
        alert("são necessários "+years+" anos")
}
//Quinto item
const ex5 = function(){
    let pa = parseInt(window.prompt("Insira a popolação do primeiro pais"));
    let tx1 = parseFloat(window.prompt("insira a taxa de crescimento do segundo pais").replace(',','.') );
    let pb = parseInt(window.prompt("Insira a popolação do segundo pais"));
    let tx2 = parseFloat(window.prompt("insira a taxa de crescimento do primeiro pais").replace(',','.'));
    
    
    let years = 0;
    while(pa<pb){
        pa= pa + (pa *(tx1/100))
        pb= pb + (pb * (tx2/100))
        years++;
    }
    alert("são necessários "+years+" anos")
}
//
const ex6 = ()=>{
    let message = ""
    for(var i = 1;i<=20;i++){
        message+=`${i}\n`
    }
    alert(message)
    message = ""
    for(var i = 1;i<=20;i++){
        message+=`${i} `
    }
    alert(message)
}
//
const ex7 = ()=>{
    let numeros = []
    let count = 1
    while(numeros.length<5){
        
        numeros.push(window.prompt(`Insira o número ${count}`))
        count++
    }
    let maior = numeros[0]
    for(numero of numeros){
        if(numero>maior){
            maior = numero
        }
    }
    alert(`O maior número digitado é ${maior}`)
}
//
const ex8 = ()=>{
    let numeros = []
    let count = 1
    while(numeros.length<5){
        
        numeros.push(window.prompt(`Insira o número ${count}`))
        count++
    }
    let soma = 0
    for(numero of numeros){
        soma+= parseInt(numero)
        }
        alert(`A soma dos numeros digitados é ${soma}
    \nA média dos numeros digitados é ${soma/5}`)
    }
//
const ex9 = ()=>{
    let message = ""
    for(var i = 1;i<=50;i++){
        if(i%2==1){
            message+=i+" "
        }
    }
    alert(`Os numeros impares entre o intervalo são ${message}`)
}
//
const ex10 = ()=>{
    let min = 0
    let max = 0
    let continuar = false
    while(continuar==false){
        min = parseInt(window.prompt(`Insira o primeiro número`))
        max = parseInt(window.prompt("Insira o segundo número"))
        if(max<=min){
            alert(`Segundo número inválido! Insira um numero maior que ${min}! Tente novamente`)
        } else {
            continuar = true
        }
    }
    let message = ""
    for(var i = (min+1);i<max;i++){
        message+= `${i} `
    }
    alert(message)
}
//
const ex11 = ()=>{
    let min = 0
    let max = 0
    let continuar = false
    while(continuar==false){
        min = parseInt(window.prompt(`Insira o primeiro número`))
        max = parseInt(window.prompt("Insira o segundo número"))
        if(max<=min){
            alert(`Segundo número inválido! Insira um numero maior que ${min}! Tente novamente`)
        } else {
            continuar = true
        }
    }
    let total = 0
    for(var i = (min+1);i<max;i++){
        total+= i
    }
    alert("O total é "+total)
}
//
const ex12=()=>{
    let tabuada = parseInt(window.prompt("Insira o numero pra tabuada"))
    let message = ""
    for(var i=1;i<=10;i++){
        message+=`${tabuada} X ${i} = ${tabuada*i}\n`
    }
    alert(`Tabuada de ${tabuada}\n${message}`)
}
//
const ex13 = ()=>{
    let base = parseInt(window.prompt("Insira a base"))
    let ex = parseInt(window.prompt("Insira o expoente"))
    let resultado = 0
    for(var i = 1;i<ex;i++){
        if(i==1){
            resultado=base*base
        } else {
            resultado*= base
        }
    }
    alert(resultado)
}
//
const ex14 = ()=>{
    let numeros = []
    while(numeros.length<10){
        numeros.push(parseInt(window.prompt("Insira um número")))
    }
    let par = 0
    let impar = 0
    for(numero of numeros){
        if(numero%2==0){
            par++
        } else {
            impar++
        }
    }
    alert(`Números pares: ${par}\nNúmeros impares: ${impar}`)
}
//
const ex15=()=>{
    let n = parseInt(window.prompt("Insira o número de itens que deseja ver"))
    let serie = "0, 1"
    let nA = 0
    let nB = 1
    //Fibonacci, um item é formado sempre pela soma dos dois ultimos
    for(var i = 0;i<n;i++){
        let aux = nA+nB
        nA = nB
        nB = aux
        serie+=`, ${aux}`
    }
    alert(serie)
}
//
const ex16 = ()=>{
    let nA = 0
    let nB = 1
    let serie = "0, 1"
    while(nB<500){
        let aux=nA+nB
        nA = nB
        nB = aux
        serie+= `, ${aux}`
    }
    alert(serie)
}
//
const ex17 = ()=>{
    let fatorial = parseInt(window.prompt("Insira o número do fatorial"))
    let resultado = fatorial
    for(var i = (fatorial-1);i>0;i--){
        resultado*= i
    }
    alert(`O fatorial de ${fatorial} é ${resultado}`)
}
//
const ex18 =()=>{
    let numeros = []
    let parar = false
    while(parar==false){
        let n = window.prompt("Insira um numero no conjunto (DIGITE 'S' PARA SAIR)")
        if(n=="S"){
            parar=true
        } else {
            numeros.push(parseInt(n))
        }
    }
    let soma = 0
    for(numero of numeros){
        soma+=numero
    }
    let menor = numeros[0]
    let maior = numeros[0]
    for(numero of numeros){
        if(numero<menor){
            menor=numero
        } else if(numero>maior){
            maior=numero
        }
    }
    alert(`O menor número digitado foi ${menor}
    \nO maior numero digitado foi ${maior}
    \nA soma dos numeros é ${soma}`)
}
//
const ex19 = ()=>{
    let numeros = []
    let parar = false
    while(parar==false){
        let n = window.prompt("Insira um numero no conjunto (DIGITE 'S' PARA SAIR)")
        if(n=="S"){
            parar=true
        } else {
            let aux = parseInt(n)
            if(aux>0&&aux<1000){
                numeros.push(aux)
            } else {
                alert("Número inválido! Tente novamente!")
            }
        }
    }
    let soma = 0
    for(numero of numeros){
        soma+=numero
    }
    let menor = numeros[0]
    let maior = numeros[0]
    for(numero of numeros){
        if(numero<menor){
            menor=numero
        } else if(numero>maior){
            maior=numero
        }
    }
    alert(`O menor número digitado foi ${menor}
    \nO maior numero digitado foi ${maior}
    \nA soma dos numeros é ${soma}`)
}
//
const ex20 = ()=>{
    let parar = false
    while(parar==false){
        let fatorial = window.prompt("Insira o número do fatorial (OU 'P' PARA PARAR)")
        if(fatorial=="P"){
            parar=true
        } else if(parseInt(fatorial)>0&&parseInt(fatorial)<16){
            let resultado = fatorial        
            for(var i = (fatorial-1);i>0;i--){
                resultado*= i
            }
            alert(`O fatorial de ${fatorial} é ${resultado}`)
        } else{
            alert("Valor inválido! Digite um valor maior que zero e menor que 16!")
        }
    }
}
//
const ex21 = ()=>{
    let numero = parseInt(window.prompt("Insira um numero inteiro para validação"))
    let validador = 0;
    let message = ""
    for(var i = 1;i<=numero;i++){
        if(numero%i==0){
            validador++
        }
    }
    if(validador==2){
        alert(`O numero ${numero} é primo`)
    } else {
        alert(`O numero ${numero} não é primo`)
    }
    console.log(validador)    
}
//
const ex22 = ()=>{
    
}