//São lacos de repeticao de um trecho de cod
const listaDestinos =new Array(//vetor
    'São Paulo',
    'Rio de janeiro',
    'Presidente Prudente',
);

const destino = "Presidente Prudente"

let contador = 0;
let destinoexiste = false;

while(contador < 3){//caso seja verdadeira

    if(listaDestinos[contador] == destino){

        destinoexiste = true;
        break;//ele sai do laço do while
    }
    
    contador += 1 ;
}
console.log("Destino exite",destinoexiste);

//sintaxe de for

for(let cont = 0;cont < 3; cont +=1 );//primeiro start do laco, quebra,incremento