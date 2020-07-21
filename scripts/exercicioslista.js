const ex1 = ()=>{
    let array = [1, 2, 3, 4, 5];
    for(item of array){
        alert(item)
    }
}
//
const ex2 = ()=>{
    let arrayOriginal = [5,1,25,46];
    
    for(var i=0;i<arrayOriginal.length; i++){
        for(var j=0 ; j< arrayOriginal.length;j++){
            
            if(arrayOriginal[i]>arrayOriginal[j]){
                const altera= arrayOriginal[j];
                arrayOriginal[j]=arrayOriginal[i];
                arrayOriginal[i]=altera  
            }
      }
    }
    alert(arrayOriginal)
}
//
const ex3 = ()=>{
    let notas = [];
    let message = " Notas: "
    while(notas.length<4){
        let nota = parseFloat(window.prompt("insira a nota"));
        notas.push(nota)
        message+=nota+", "
    }
    let soma = 0;
    for(var i = 0;i<notas.length;i++){
        soma+=notas[i];
    }
    alert(message+"\nMédia: "+(soma/notas.length))
}
//
const ex4 = () =>{
    let vogais= ['a','e','i','o','u']
    let array = ['a','b','c','d','e']
    let tc= 0;

    for(var i = 0; i<array.length;i++){
       // if(!vogais.includes(array[i])){
         //   tc++
        //}
        for(var j=0 ; j< vogais.length;j++){
            if(vogais[j]!=array[i]){
                tc++;
                j= vogais.length
                i++;
            }
        }    
    
    }
    alert(tc+" consoantes")
}
//
const ex5 = ()=>{
    let arrayEntrada = []
    let contador = 0;
    let par = [];
    let impar = [];
    let mensagem = "Vetor Original: "
    while(arrayEntrada.length<10){
        contador++
        arrayEntrada.push(parseInt(window.prompt("Insira o "+contador+'o item')))
        }
    for(var i = 0;i<arrayEntrada.length;i++){
        if((arrayEntrada[i]%2)==0){
            par.push(arrayEntrada[i])
        } else {
            impar.push(arrayEntrada[i])
        }
    }
    alert("O array inserido é: "+arrayEntrada)
    alert("Os numeros pares são: "+par)
    alert("Os numeros impares são: "+impar)
}
//
const ex6 = ()=>{
    

    // const coletaNota=(arrayAluno,ct)=>{
    //     for(var i = 0;i<4;i++){
    //         arrayAluno.push(parseFloat(window.prompt("Insira a nota do aluno n "+ ct.nota)))
    //     }
    //     ct.nota ++
    //     console.log(ct.nota)
    //     console.log(aluno1+aluno2+aluno3+aluno4)
    //     arrayAluno=[];
    // }
    // function calculaMedia(arrayAluno, novoArray){
    //     let sum = 0
    //     for(nota of arrayAluno){
    //         sum+= nota;
    //     }
    //     novoArray.push(sum/4);
    // }
    // let aluno1=[]
    // let aluno2=[]
    // let aluno3=[]
    // let aluno4=[]
    // let medias=[]
    // const contador = {nota:1}
    // coletaNota(aluno1,contador)
    // coletaNota(aluno2,contador)
    // coletaNota(aluno3,contador)
    // coletaNota(aluno4,contador)
    // calculaMedia(aluno1, medias)
    // calculaMedia(aluno2, medias)
    // calculaMedia(aluno3, medias)
    // calculaMedia(aluno4, medias)
    // let acimaSete = 0;
    // for(var i=0;i<medias.length;i++){
    //     if(medias[i]>=7){
    //         acimaSete++
    //     }
    // }
    // alert(acimaSete+" alunos com nota acima ou igual a 7.0")
    let alunos=[];
    let medias=0;
    for(let i = 0 ; i<4;i++){
        for(let j = 0 ; j<4;j++){
            const nota = parseFloat(window.prompt(`informe a nota do aluno ${i+1}`))
            if(j==0){
                alunos[i]=[];
                alunos[i].push(nota)
            }else{
                alunos[i].push(nota)
            } 
        }
    }

    for(let i = 0;i<alunos.length;i++){
        let soma=0
        for(let j=0;j<alunos[i].length;j++){
            soma+=alunos[i][j]
        }
        if(soma/4>=7){
            medias ++;
        }
    }

    alert(`alunos com nota maior que 7 ${medias}`)
    

}
//
const ex7 = ()=>{
    let vetor = []
    while(vetor.length<5){
        vetor.push(parseInt(window.prompt("Insira um numero no vetor")))
    }
    let soma = vetor[0]
    let multiplicacao = vetor[0]
    for(var i =1;i<vetor.length;i++){
        soma = soma+vetor[i]
        multiplicacao = multiplicacao*vetor[i]
    }
    alert("Numeros do vetor: "+vetor+"\nSoma dos itens: "+soma+"\nMultiplicação dos itens: "+multiplicacao)
}
//
const ex8 = ()=>{
    let idade = []
    let altura = []
    while(idade.length<5 && altura.length<5){
        idade.push(parseInt(window.prompt("Insira uma idade")))
        altura.push(parseFloat(window.prompt("Insira sua respectiva altura")))
    }
    for(var i=4;i>=0;i--){
        alert("Em ordem inversa:\nIdade: "+idade[i]+"\nAltura: "+altura[i])
    }
}
//
const ex9 = ()=>{
    let array = []
    let somaQuadrados = 0
    while(array.length<10){
        array.push(parseInt(window.prompt("Insira um numero caraio")))
    }
    for(num of array){
        somaQuadrados = (num*num)+somaQuadrados
    }
    alert("A soma dos quadrados dos items é igual a "+somaQuadrados)
}
//
const ex10 = ()=>{
    let vetor1 = []
    let vetor2 = []
    let novoVetor = []
    while(vetor1.length<10){
        vetor1.push(parseFloat(window.prompt("Insira um numero no vetor 1")))
    }
    while(vetor2.length<10){
        vetor2.push(parseFloat(window.prompt("Insira um numero no vetor 2")))
    }

    for(var i = 0;i<vetor1.length;i++){
        novoVetor.push(vetor1[i])
        novoVetor.push(vetor2[i])
    }
    alert("Vetor 1: "+vetor1+"\nVetor 2: "+vetor2+"\nNovo vetor: "+novoVetor)
}
//
const ex11 = ()=>{
    let vetor1 = []
    let vetor2 = []
    let vetor3 = []
    let novoVetor = []
    while(vetor1.length<10){
        vetor1.push(parseFloat(window.prompt("Insira um numero no vetor 1")))
    }
    while(vetor2.length<10){
        vetor2.push(parseFloat(window.prompt("Insira um numero no vetor 2")))
    }
    while(vetor3.length<10){
        vetor3.push(parseFloat(window.prompt("Insira um numero no vetor 3")))
    }

    for(var i = 0;i<vetor1.length;i++){
        novoVetor.push(vetor1[i])
        novoVetor.push(vetor2[i])
        novoVetor.push(vetor3[i])
    }
    alert("Vetor 1: "+vetor1+"\nVetor 2: "+vetor2+"\nVetor 3: "+vetor3+"\nNovo vetor: "+novoVetor)
}
//
const ex12 = ()=>{
    let idades = []
    let alturas = []

    while(idades.length<30){
        idades.push(parseInt(window.prompt("Insira a idade do aluno")))
        alturas.push(parseFloat(window.prompt("Insita a altura do aluno")))
    }
    let mediaAltura = 0
    for(altura of alturas){
        mediaAltura = mediaAltura + altura
    }
    mediaAltura/=alturas.length
    let contadorInferior = 0
    for(var i = 0;i<idades.length;i++){
        if(idades[i]>13 && alturas[i]<mediaAltura){
            contadorInferior++
        }
    }
    alert(contadorInferior+" alunos possuem mais de 13 anos e altura inferior a media de todos os alunos")
}
//
const ex13 = ()=>{
    let meses = ["Janeiro", "Fevereiro", "Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"]
    let medias = [];
   for(var i = 0;i<meses.length;i++){
        medias.push(parseFloat(window.prompt("Insira a temperatura média de "+meses[i])))
    }
    let mediaAnual = 0;
    for(media of medias){
        mediaAnual+= media
    }
    mediaAnual/= meses.length
    console.log(meses)
    console.log(medias)
    console.log(mediaAnual)
    let mesesMediaMaiorAnual = []
    for(var i = 0; i<meses.length; i++){
        if(medias[i]>mediaAnual){
            mesesMediaMaiorAnual.push(meses[i])
        }
    }
    alert("Os meses que apresentaram media maior que a media anual foram: "+mesesMediaMaiorAnual)
}
//
const ex14 = ()=>{
    let suspeitas = [];
    suspeitas.push(window.prompt("Telefonou para a vítima? - S para sim e N para não"))
    suspeitas.push(window.prompt("Esteve no local do crime? - S para sim e N para não"))
    suspeitas.push(window.prompt("Mora perto da vítima? - S para sim e N para não"))
    suspeitas.push(window.prompt("Devia para a vítima - S para sim e N para não"))
    suspeitas.push(window.prompt("Já trabalhou com a vítima? - S para sim e N para não"))
    let countSuspeitas = 0
    for(suspeita of suspeitas){
        if(suspeita == "S"){
            countSuspeitas++
        }
    }
    if(countSuspeitas>0&& countSuspeitas<=2){
        alert("Suspeita")
    } else if(countSuspeitas>2&&countSuspeitas<=4){
        alert("Cúmplice")
    } else if(countSuspeitas==5){
        alert("Assassino")
    } else {
        alert("Inocente")
    }
}
//
const ex15=()=>{
    let valores = []
    let para = false
    while(para==false){
        let valor = parseFloat(window.prompt("Insira o valor desejado (-1 para finalizar entrada)"))
        if(valor>=0){
            valores.push(valor)
        } else{
            para=true
        }
    }
    alert("Foram lidos "+valores.length+" valores")
    alert("Os valores, na ordem em que foram lidos: "+valores)
    let valoresAux=[]
    for(var i = (valores.length-1);i>=0;i--){
        valoresAux.push(valores[i])
    }
    alert("Os valores, na ordem inversa em que foram lidos: "+valoresAux)
    let soma = 0;
    for(valor of valores){
        soma +=valor
    }
    alert("A soma dos valores informados é: "+soma)
    let media = soma/valores.length
    alert("A média dos valores é: "+media)
    let acimaMedia = []
    for(valor of valores){
        if(valor>media){
            acimaMedia.push(valor)
        }
    }
    alert("Os valores acima da média são: "+acimaMedia)
    acimaMedia = []
    for(valor of valores){
        if(valor>7){
            acimaMedia.push(valor)
        }
    }
    alert("Os valores acima de 7 são: "+acimaMedia)
    alert("Final da execução do programa!")
    console.log(valores)
}
//
const ex16 = () =>{
    let vendedores = [500, 1000,2000,3000,4000,5000,6000,7000,8000,9000,10000]
    

}
//
const ex17 = ()=>{
    let parar = false
    while(parar==false){
        let nome = window.prompt("Digite o nome do atleta")
        if(nome==""){
            parar=true
        }else{
            let saltos = []
            while(saltos.length<5){
                saltos.push(parseFloat(window.prompt("Insira a distancia do salto")))
            }
            let message = "Atleta: "+nome
            message+="\nPrimeiro salto: "+saltos[0]+"m"
            message+="\nSegundo salto: "+saltos[1]+"m"
            message+="\nTerceiro salto: "+saltos[2]+"m"
            message+="\nQuarto salto: "+saltos[3]+"m"
            message+="\nQuinto salto: "+saltos[4]+"m"
            alert(message)
            message = ""
            message+="Resultado Final: "
            message+="\nAtleta: "+nome
            message+="\nSaltos: "+saltos
            let media = 0;
            for(salto of saltos){
                media+=salto
            }
            media/=saltos.length
            message+="\nMedia dos saltos: "+media+"m"
            alert(message)

        }
    }
}
//
const ex18 = ()=>{
    let pontuacao = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    let parar = false;
    while(parar==false){
        let jogador = window.prompt("Digite o numero do jogador votado")
        if(jogador==0){
            parar=true
        } else if(jogador<0 && jogador>23){
            alert("Número inválido, digite novamente")
        } else{
            pontuacao[(jogador-1)]++
        }
    }


    const notasJogadores=[];

    pontuacao.forEach((element, index)=>{
        if(element>0){
        notasJogadores.push({
            nota:element,
            jogador:index+1
            
        })    
        }

    })

    console.log(pontuacao)
}