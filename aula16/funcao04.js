function fatorial(n) {
    let fat = 1
    for (let c = n; c > 1; c--) {
        fat = fat*c
    }
    return fat
}

console.log(fatorial(5));

//recursividade
function fatrec(n) {
    if (n==1) {
        return 1
    }
    else{
        return n*fatrec(n-1)
    }
}

console.log(fatrec(5));