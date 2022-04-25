var idade = 22

if (idade < 16) {
    console.log('menor de idade')
} else {
    if (idade >= 16 && idade < 18) {
        console.log('voto opcional')
    }
    else {
        console.log('maior de idade')
        if (idade>65) {
            console.log('voto opcional')
        }else{
            console.log('voto obrigatório');
        }
    }
}
