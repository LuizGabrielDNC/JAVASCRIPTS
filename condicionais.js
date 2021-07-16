const listaDestinos = new Array(
    'São Paulo',
    'Rio de janeiro',
    'Presidente Prudente',
);


const idadeComprador = 15;
const acompanhada = true;

if(idadeComprador >= 18){//Condicional Simples fluxo do cog
    console.log("Comprador maior de idade ")
    console.log(listaDestinos);

}else{//pessoa menor de idade
    if(acompanhada == true){
        console.log("Acompanhado pode comprar");
        console.log(listaDestinos);
    }
    else{

    
        console.log("Menor de Idade não pode !!")

   }
}

//a verificação contem dois valores false ou true 
//tem alt + shift + f indenta cod..
//else if resumo da indentação ..