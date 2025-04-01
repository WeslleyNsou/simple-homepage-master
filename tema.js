var tema = document.getElementById('button-tema')

tema.addEventListener('click', function(){
// querySelectorAll seleciona todos os elementos 
// e armazena na variável textEscuro
    var textEscuro = document.querySelectorAll('a, h1, h2, p, li')
//toggle a classe dark em todos os elementos selecionados
    //para que o texto fique claro quando o tema escuro for ativado
    textEscuro.forEach(function(textEscuro){
        textEscuro.classList.toggle('dark')
    })

})