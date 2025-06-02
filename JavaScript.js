botonDespliegue.addEventListener('click', () => {
    let contenido = document.getElementById('contenido');
    if (contenido.style.display === 'none' || contenido.style.display === '') {
        contenido.style.display = 'block';
        botonDespliegue.textContent = 'Ocultar contenido';
    } else {
        contenido.style.display = 'none';
        botonDespliegue.textContent = 'Mostrar contenido';
    }

});