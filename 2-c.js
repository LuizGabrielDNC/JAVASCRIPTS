const listaDestinos = new Array(
    'São Paulo',
    'Rio de janeiro ',
    'Presidente Prudente',
);

console.log(listaDestinos);

listaDestinos.push('Curitiba');//adiciona elemento na lista

console.log(listaDestinos);

listaDestinos.splice(2,1);
console.log(listaDestinos);
console.log(listaDestinos[1]);//exibi rio de Janeiro..

