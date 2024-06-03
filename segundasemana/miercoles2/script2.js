document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento del título
    var mainTitle = document.getElementById('main-title');

    // Agregar un event listener para el clic
    mainTitle.addEventListener('click', function() {
        // Cambiar el tamaño de la fuente del título al hacer clic
        var currentFontSize = parseInt(window.getComputedStyle(mainTitle).fontSize);
        var newFontSize = currentFontSize + 5; // Incremento de 5px
        mainTitle.style.fontSize = newFontSize + 'px';
    });

    // Agregar un efecto de hover al título
    mainTitle.addEventListener('mouseenter', function() {
        mainTitle.style.color = 'red';
    });

    mainTitle.addEventListener('mouseleave', function() {
        mainTitle.style.color = 'black';
    });

    // Función para mostrar un mensaje de bienvenida después de 3 segundos
    setTimeout(function() {
        alert('¡Bienvenido a League.com!');
    }, 3000);
});
