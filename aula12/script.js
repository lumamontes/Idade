
function carregar () {
    var img = window.document.querySelector('#imagem')
    var msg = window.document.querySelector('#msg')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'fotomanha.jpg'
    } else if (hora >= 12 && hora <=18) {
        // boa tarde
        img.src = 'fototarde.jpg'
    } else {
        //boa noite
        img.src = 'fotonoite.jpg'
    }
}