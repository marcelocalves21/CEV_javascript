function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('gender')
        var idade = ano - Number(fano.value)
        var gender = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //definindo gênero
        if (fsex[0].checked) {
            gender = 'homem'
            // definindo a faixa etária
            if (idade >=0 && idade < 13){
                //criança 
                img.setAttribute('src', '../../../_images/rounded_boy_s.png')
            } else if (idade < 20) {
                //adolescente
                img.setAttribute('src', '../../../_images/rounded_teen_boy_s.png')
            } else if (idade < 65) {
                // adulto
                img.setAttribute('src', '../../../_images/rounded_man_s.png')
            } else {
                // idoso
                img.setAttribute('src', '../../../_images/rounded_old_man_s.png')
            }
        } else if(fsex[1].checked) {
            //definindo o gênero
            gender = 'Mulher'
            // definindo a faixa etária
            if (idade >=0 && idade < 13) {
                //criança
                img.setAttribute('src', '../../../_images/rounded_girl_s.png')
            } else if (idade < 20) {
                //adolescente
                img.setAttribute('src', '../../../_images/rounded_teen_girl_s.png')
            } else if (idade < 65) {
                // adulto
                img.setAttribute('src', '../../../_images/rounded_woman_s.png')
            } else {
                // idoso
                img.setAttribute('src', '../../../_images/rounded_old_woman_s.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${gender}</strong> com ${idade} anos.`
        res.appendChild(img)
    }
}