function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = "../../../_images/rounded_morning_s.png"
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!!!
        img.src = "../../../_images/rounded_afternoon_s.png"
        document.body.style.background = '#F4A386'
    } else {
        // BOA NOITE!
        img.src = "../../../_images/rounded_night_s.png"
        document.body.style.background = '#0A1819'
    }

}
