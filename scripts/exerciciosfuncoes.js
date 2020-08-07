
const  ex1=()=>{
    //CONTRUÇÃO DA LÓGICA
    //O exercicio consiste em digitar um numero, e o programa vai criar uma 'piramide', em que cada linha da piramide, de cima pra baixo, apresenta como numero de colunas o proprio número da linha (ex.:1/22/333)
    //Primeiro criamos as variaveis. Uma variavel fica responsável por guardar o texto que a função vai criar. Essa variavel é a que vai guardar a 'piramide' (var texto). Outra variável vai receber o numero de linhas que a piramide terá (var numeroItens). Por ultimo, uma variavel auxiliar chamada 'controlador'. Ela terá como função limitar o numero de vezes que um numero será escrito na linha, que é o valor do proprio numero.
    let texto = ""
    let numeroItens = parseInt(window.prompt("Digite um numero"))
    let controlador = 0;
    //Com as variaveis criadas, a função primeiro verifica se o numero digitado pelo usuario é menor que o controlador. O controlador foi inicializado em zero, então ele terá como limite o próprio numero digitado.
    const criaTexto = ()=>{
        if(numeroItens>controlador){
            controlador++//No momento que ele é menor, ele já é incrementado, pois determinará o numero de vezes que o numero será escrito na tela
            for(var i = 0;i<controlador;i++){//É no for que ele atua como limitador de quantas vezes ele será escrito na variavel texto
                texto+=`${controlador} `
            }
            texto+='\n'//No final do for, e ainda dentro do if, acrescentamos uma quebra de linha. Aqui a iteração acaba, tendo como produto do processo uma linha escrita de acordo com o que está definido no controlador
            return criaTexto();//Por ultimo, a função retorna a propria função, que será executada novamente com outros valores de variáveis. Já que o determina se o IF será executado é o fato do numero digitado ser maior que o controlador, no momento em que o controlador assumir o valor do numero digitado, a ultima linha será escrita com sucesso, e o IF não terá mais nenhuma iteração.
        }
    }
    criaTexto();//Uma vez que a função foi executada, a variavel que guarda o texto que será apresentado no alert abaixo já terá sido manipulada, e carregará a piramide que a função contruiu
    alert(texto)
    }
//
const  ex2=()=>{
        let texto = ""
        let numeroDigitado = parseInt(window.prompt("Digite o numero de linhas desejado"))
        let controlador = 0
        const criaPiramide = ()=>{
            if(numeroDigitado>controlador){
                controlador++
                for(var i = 1;i<=controlador;i++){
                    texto+=i+" "
                }
                texto+='\n'
                return criaPiramide();
            }
        }
        criaPiramide();
        alert(texto)
}

const ex3 = ()=>{

    let valor1= parseFloat(window.prompt('informe o valor 1'))
    let valor2= parseFloat(window.prompt('informe o valor 2'))
    let valor3= parseFloat(window.prompt('informe o valor 3'))

    const soma=(soma1,soma2,soma3)=>{
        return soma1+soma2+soma3
    }

    alert(soma(valor1,valor2,valor3));

}
//
const ex4 = ()=>{
    let numero = parseInt(window.prompt("Digite o numero"))
    let valida=(num)=>{
        if(num>0){
            return "P"
        } else {
            return "N"
        }
    }
    alert(valida(numero))
}
//
const ex5 = ()=>{
    let tx = parseFloat(window.prompt("Digite a taxa do imposto"))
    let custo = parseFloat(window.prompt("Digite o custo do produto sem imposto"))
    const somaImposto = (taxaImposto, custo)=>{
        custo*=(1+(taxaImposto/100))
        return custo;
    }
    let custoTotal = somaImposto(tx, custo)
    alert("Custo total: "+custoTotal)
}
//
const ex6 = ()=>{
    let parar = false
    while(parar==false){
        let hr = parseFloat(window.prompt("Digite as horas"))
        const conversao =(horas)=>{
            let horasConvertidas = {
                hora: 0,
                medida: ""
            }
            
            if(horas>=13){
                horasConvertidas.hora = horas-12;
                horasConvertidas.medida = "P"
            } else if(horas>=12){
                horasConvertidas.hora = horas;
                horasConvertidas.medida = "P"
            }else {
                horasConvertidas.hora = horas;
                horasConvertidas.medida = "A"
              }
              console.log(horas)
              console.log(horasConvertidas)
              return horasConvertidas;
        }
        const saida = (horasConvertidas)=>{
            if(horasConvertidas.medida == "A"){
                alert(horasConvertidas.hora+"AM")
            }else{
                alert(horasConvertidas.hora+"PM")
            }
        }
        let hrConvertida = conversao(hr)
        saida(hrConvertida)
        let sai = window.prompt("Digite S pra continuar ou N para sair")
        if(sai=="N"||sai=='n'){
            parar=true
        }
    }
}
//
const ex7 = ()=>{
    let parar = false
    let resultado = {
        quantidade: 0,
        valorTotal: 0
    }
    const valorPagamento = (valor, dias)=>{
        if(dias==0){
            resultado.quantidade++
            resultado.valorTotal+=valor
            return valor
        } else {
            let juros = dias*(valor * 0.001);
            resultado.quantidade++
            resultado.valorTotal+=valor
            return (valor*1.03+juros)
        }
    }
    while(parar==false){
        let valor = window.prompt("Digite o valor da parcela")
        if(valor==""){
            parar=true
        } else{
            valor = parseFloat(valor)
            let atraso = parseInt(window.prompt("Digite o numero de dias em atraso"))
            alert("O valor total a ser pago é: R$"+valorPagamento(valor,atraso))
        }
    }
    alert(`Relatório Final\nParcelas pagas: ${resultado.quantidade}\nValor total pago: R$${resultado.valorTotal}`)
}
//
const ex8 = ()=>{
    let numero = parseInt(window.prompt("Digite um número"))
    const contaDigitos = (numero)=>{
        let string = numero.toString()
        console.log(string)
        if(numero==0){
            return 0
        }else{
            return string.length
        }
    }
    alert(`O numero digitado tem ${contaDigitos(numero)} digito(s)`)
}
//
const ex9 = ()=>{
    let numero = parseInt(window.prompt("Digite um numero inteiro"))
    const reverso = (num)=>{
        let string = num.toString()
        let newString = ""
        for(var i = (string.length-1);i>=0;i--){
            newString+=string.charAt(i)
        }
        return newString
    }
    alert(`O reverso do numero é ${reverso(numero)}`)
}
const ex10 = ()=>{
    function getRandomArbitrary(min, max) { //PEGUEI NO MOZZILA
        return Math.random() * (max - min) + min;
      }
      let numeroSorteado = parseInt(getRandomArbitrary(2,13))   
      if(numeroSorteado == 2 || numeroSorteado == 3 || numeroSorteado ==12){
          alert(`O numero sorteado foi ${numeroSorteado} e voce perdeu!`)
      }else if(numeroSorteado == 7 ||numeroSorteado == 11){
        alert(`O número sorteado foi ${numeroSorteado} e voce ganhou!`)
      } else {
          alert(`Voce sorteou o numero ${numeroSorteado} e deve continuar até encontrá-lo novamente`)
          let tentativa = 0
          while(numeroSorteado!=tentativa){
              tentativa = parseInt(getRandomArbitrary(2,13))
              if(tentativa==7){
                  alert(`Voce perdeu pois o numero sorteado foi ${tentativa}`)
                  tentativa=numeroSorteado
              }else if(tentativa==numeroSorteado){
                    alert(`Voce ganhou! O número sorteado foi novamente o ${tentativa}`)
                    tentativa=numeroSorteado
              }else{
                  alert(`Tente novamente! Voce sorteou o numero ${tentativa}, e deve sortear o numero ${numeroSorteado}`)
              }
          }
      }
}

const ex11=()=>{

        //Data com mês por extenso. Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato D de mesPorExtenso de AAAA. Opcionalmente, valide a data e retorne NULL caso a data seja inválida.
        const data = window.prompt('informe a data no padrão DD/MM/AAAA')

        const splitData= data.split('');

        

        // const splitData= data.split('/')

        // const validateDay=(day)=>{
        //     if(day>0 && day<=31){
        //         return true
        //     }
        //     return false
        // }

        // const validateMoth =(month)=>{
        //     if( month>0 && month<=12){
        //         return true
        //     }
        //     return false
        // }
       
        // const validateYear=(year)=>{
        //     if(year.length!=4){
        //         return false
        //     }
        //     return true
        // }

        // const validaData =()=>{
            
        //     if( !validateDay(parseInt(splitData[0]))){
        //         return false;
        //     }

        //     if( !validateMoth(parseInt(splitData[1]))){
        //         return false;
        //     }

        //     if( !validateYear(splitData[2])){
        //         return false;
        //     }

        //     return true;
        // }

        // const convertMonth = (month)=>{
        //     let textMonth=''

        //     switch(month){
        //         case "01": textMonth='Janneiro'; break;
        //         case "02": textMonth="Fevereiro";break;
        //         case "03": textMonth="Março";break;
        //         case "04": textMonth="Abril";break;
        //         case "05": textMonth="Maio";break;
        //         case "06": textMonth="Junho";break;
        //         case "07": textMonth="Julho";break;
        //         case "08": textMonth="Agosto";break;
        //         case "09": textMonth="Setembro";break;
        //         case "10": textMonth="Outubro";break;
        //         case "11": textMonth="Novembro";break;
        //         case "12": textMonth="Dezembro"; break;

        //         default: break;
        //     }

        //     return textMonth

        // }

        // if(validaData()){
        //     const monthText= convertMonth(splitData[1]);
        //     alert(`${splitData[0]} de ${monthText} de ${splitData[2]}`)
        // }else{
        //     alert('NULL')
        //     return ex11()
        // }


      


}

