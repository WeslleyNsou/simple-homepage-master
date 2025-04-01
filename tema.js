var tema = document.getElementById('button-tema')
var lua = document.getElementById('lua')
var logo = document.getElementById('logo-img')


tema.addEventListener('click', function(){
// querySelectorAll seleciona todos os elementos 
// e armazena na variável textEscuro
    var textEscuro = document.querySelectorAll('a, h1, h2, p, body, #button-tema')
//toggle a classe dark em todos os elementos selecionados
    //para que o texto fique claro quando o tema escuro for ativado
    textEscuro.forEach(function(textEscuro){
        textEscuro.classList.toggle('dark')
    })
    //mudança da imagem lua
    if(lua.src.endsWith('resources/Moon_fill_light.svg')){
        lua.src = 'resources/Moon_fill.svg';
    }
    else{
        lua.src = 'resources/Moon_fill_light.svg';
    }

    //mudança do logo
    if (logo.src.endsWith('resources/logo-light.svg')) {
        logo.src = 'resources/logo-dark.svg';
        
    }else{
        logo.src = 'resources/logo-light.svg';
    }
})