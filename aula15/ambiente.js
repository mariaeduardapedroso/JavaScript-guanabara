let num = [5,8,2,9,3]

console.log(num);

num[3] = 6
num.push(7) //adicionar valor a mais no array
console.log(num);
console.log( num.length )//tamanho vetor
num.sort() //ordenar em ordem crescente
console.log(num);

console.log(num[0]);
console.log(num[5]);

console.log('for');
for (let a= 0; a  < num.length; a ++) {
    console.log( num[a]);
    
}

console.log('FOR IN');

for (let pos in num) { //posição em numero
   console.log(num[pos]);
}

console.log('Valor 7 chave: ' + num.indexOf(7)); //procurar o valor que queremos e retorna a chave que precisamos
//retorna -1 se não existe o valor