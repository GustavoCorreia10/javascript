var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date ()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora <12) {
    alert('BOM DIA!')
    img.src = 'pngmanha.png'
    document.body.style.background = 'rgb(80, 204, 500)'
} else if (hora >= 12 && hora <= 18) {
    alert('BOA TARDE!')
    img.src = 'pngtarde.png'
    document.body.style.background = 'salmon' 
} else {
    alert('BOA NOITE!')
    img.src = 'pngnoite.png'
    document.body.style.background = 'darkblue'
}

