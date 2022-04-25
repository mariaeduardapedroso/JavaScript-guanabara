function zerar(){
    var res = document.getElementById('res') 

    res.innerHTML = ``
}

function gerar(){
    
    var numero = document.getElementById('numero')
    var res = document.getElementById('res') 
    res.innerHTML = ``
    var n = Number(numero.value)

    if(n == ''){
        alert('[ERRO] Informe um numero')
    }else{
        for(let i = 0 ; i <= 10 ; i++){
            res.innerHTML += `${n} * ${i} = ${i*n}<br\>`
        }
    }
}
