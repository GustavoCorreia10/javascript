function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var formano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (formano.value.length == 0 || formano.value > ano) {
        window.alert('(ERRO) Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >=0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'homem-bebe.png')
            } else if (idade >= 10 && idade < 30) {
                //JOVEM
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'homem-idoso.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >=0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'mulher-bebe.png')
            } else if (idade >= 10 && idade < 25) {
                //JOVEM
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    
        res.appendChild(img)
    }
}