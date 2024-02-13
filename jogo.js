var altura = 0
var largura = 0
var tempo = 30

var nivel = window.location.search.replace('?', '')

var intervaloTempo = 0

if(nivel === 'facil')
{
    intervaloTempo = 2000
}
else if(nivel === 'medio')
{
    intervaloTempo = 1000
}

else if(nivel === 'dificil')
{
    intervaloTempo = 750
}
var cronometro = setInterval(function()
{
    tempo--
    if (tempo < 0)
    {
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        location.href = 'vitoria.html'
    }
    else
    {
        document.getElementById('segundos').innerHTML = tempo
    }
},1000)
function ajustaTamanhoTela()
{
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajustaTamanhoTela()

var conta_vidas = 3
function posicaoMosquito()
{
    if(document.getElementById('mosquito'))
    {
        document.getElementById('mosquito').remove()
        conta_vidas--
        console.log(conta_vidas)
        
        if(conta_vidas === 2)
        {
            document.getElementById('v1').src = 'imagens/coracao_vazio.png'
        }
        else if(conta_vidas === 1)
        {
            document.getElementById('v2').src = 'imagens/coracao_vazio.png'
        }
        else
        {
            document.getElementById('v3').src = 'imagens/coracao_vazio.png'
            location.href = 'game_over.html'
        }
    }

    positionX = Math.floor(Math.random() * largura) - 90
    positionY = Math.floor(Math.random() * altura) - 90
    
    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY
    
    
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoMosquito() + ' ' + ladoAleatorio()
    mosquito.style.position = 'absolute'
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    document.body.appendChild(mosquito)
    mosquito.id = 'mosquito'
    mosquito.onclick = function()
    {
        mosquito.remove()
    }
}

function tamanhoMosquito()
{
    var classe = Math.ceil(Math.random() * 3)

    switch(classe)
    {
        case 1:
            return 'mosquito1'
        
        case 2:
            return 'mosquito2'

        case 3:
            return 'mosquito3'
    }
}

function ladoAleatorio()
{
    var lado = Math.ceil(Math.random() * 2)

    if(lado === 1)
    {
        return 'inverte-lado'
    }
    else
    {
        return ''
    }
}


function inicarJogo()
{
    var nivel = document.getElementById('dificuldade').value
    if (nivel === '')
    {
        alert('Selecione uma dificuldade')
        return false
    }
    
    window.location.href = "app.html?" + nivel
}