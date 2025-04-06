var button = document.getElementById('button-hamburguer')

button.addEventListener('click', function() {
    var menu = document.getElementById('container-menu')
    var content = document.getElementById('container-content')

    menu.classList.toggle('frente')
    content.classList.toggle('atras')
})