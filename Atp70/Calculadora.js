function soma(num1, num2){
    console.log(num1+num2);
}

function subtracao(num1,num2){
    console.log(num1-num2);
}

function multiplicacao(num1,num2){
    console.log(num1*num2);
}

function divisao(num1,num2){
    if(num2 === 0){
       console.log("Não é possivel dividir por zero.");
    }else{
        console.log(num1/num2);
    }

}

soma(4,5);
subtracao(100,40);
multiplicacao(50,2);
divisao(49,0)
