var button = document.getElementById('button-hamburguer')

button.addEventListener('click', function() {
    var nav = document.getElementById('nav')

    nav.classList.toggle('active')
})