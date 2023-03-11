
function insert(num){
    var numero = document.getElementById('resultado').innerHTML ;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = ""
}

function back(){
   var resultado =  document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado =  document.getElementById('resultado').innerHTML;
    var segundo = document.getElementById('resultado').innerHTML = resultado.substring(0,2);

    console.log(segundo);
    console.log(typeof(segundo));

    if(resultado){
        if(segundo != "--" && segundo != "++" && segundo != "**" && segundo != "//"){
            document.getElementById('resultado').innerHTML = eval(resultado);                    
        }else{
            document.getElementById('resultado').innerHTML = "Erro sinais iguais";                    
        }
    }else{
        document.getElementById('resultado').innerHTML = "Erro conp";
    }
}