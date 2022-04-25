function carregar() {
    var msg = window.document.getElementById('msg')

    var img = window.document.getElementById('foto')

    var data = new Date()

    var hora = data.getHours()

    msg.innerHTML = 'agora são ' + hora + ' horas'

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.png' //NÃO FUNCIONA
        document.body.style.background = 'white'
    } else if (hora <= 12 && hora < 18) {
        img.src = 'tarde.png' //NÃO FUNCIONA
        document.body.style.background = 'yellow'
    } else {
        img.src = 'noite.png' //NÃO FUNCIONA
        document.body.style.background = 'black'
    }
}