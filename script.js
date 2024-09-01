var numeroadivinhar = 0;
var tentativas = 0;

function refresh(){

    numeroadivinhar = parseInt(Math.random() * 100);
    console.log(numeroadivinhar)
}

function verifyNumber(){

    var numero = document.getElementById("numero").value;
    
    if ( numero > 100 || numero < 1  )
    {
        alert("Número inválido!");
        return;
    }

    if (numero > numeroadivinhar)
    { 
        tentativas++;
        alert("O número é MENOR que esse!!");
    }

    else if (numero < numeroadivinhar)
    {
        tentativas++;
        alert("O número é MAIOR que esse!!");
    }

    else
    {
        alert("Parabéns! Você acertou com "+tentativas+" tentativas!");
    }

}

 addEventListener('keydown', function(event){
    const tecla = event.keyCode;
    if(tecla == 13 || tecla == 32){
        verifyNumber();
    }     
})
    


refresh();