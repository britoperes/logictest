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