function abrirImagem() {
    var res = window.document.getElementById('resultado')
    var img = document.createElement('img')
    img.setAttribute('id', 'imagem')
    img.setAttribute('src', 'foto.png')
    res.appendChild(img)
}