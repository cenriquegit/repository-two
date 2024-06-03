document.addEventListener("DOMContentLoaded", function() {
    let index = 0;
    const competencias = document.querySelectorAll('.competencia');
    const totalCompetencias = competencias.length;
    let intervalID;

    // Función para mostrar la competencia actual
    const mostrarCompetencia = (indice) => {
        competencias.forEach(competencia => {
            competencia.style.display = 'none'; // Oculta todas las competencias
        });

        // Asegura que el índice esté dentro del rango de competencias
        index = (indice + totalCompetencias) % totalCompetencias;
        competencias[index].style.display = 'flex'; // Muestra la competencia actual
    };

    // Función para mostrar la siguiente competencia
    const mostrarSiguienteCompetencia = () => {
        index++;
        mostrarCompetencia(index);
    };

    // Función para mostrar la competencia anterior
    const mostrarCompetenciaAnterior = () => {
        index--;
        mostrarCompetencia(index);
    };

    // Mostrar la primera competencia al cargar la página
    mostrarCompetencia(index);

    // Cambiar a la siguiente competencia cada 5 segundos
    intervalID = setInterval(mostrarSiguienteCompetencia, 5000);

    // Evento al pasar el mouse sobre el carrusel: detener la reproducción automática
    document.querySelector('.container').addEventListener('mouseenter', () => {
        clearInterval(intervalID);
    });

    // Evento al quitar el mouse del carrusel: reanudar la reproducción automática
    document.querySelector('.container').addEventListener('mouseleave', () => {
        intervalID = setInterval(mostrarSiguienteCompetencia, 5000);
    });

    // Botón de navegación hacia adelante
    document.querySelector('.next').addEventListener('click', () => {
        mostrarSiguienteCompetencia();
    });

    // Botón de navegación hacia atrás
    document.querySelector('.prev').addEventListener('click', () => {
        mostrarCompetenciaAnterior();
    });
});
