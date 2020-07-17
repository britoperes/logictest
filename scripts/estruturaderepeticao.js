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


