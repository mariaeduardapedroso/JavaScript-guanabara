var hora = 8
var agora = new Date()//pegar a data
hora = agora.getHours()//pegar a hora do sistema

console.log('agora são:'+hora+' horas');

if (hora<12) {
    console.log('Bom dia');
}else{
    if (hora<=18) {
        console.log('Boa tarde');
    }else{
        console.log('Boa Noite');
    }
}