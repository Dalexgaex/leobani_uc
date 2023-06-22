// Obtener referencias a los dos últimos elementos ul
var ulParcial2 = document.getElementById('tareasParcial2');
var ulParcial3 = document.getElementById('tareasParcial3');

// Agregar nuevas tareas al Parcial 2
var nuevasTareasParcial2 = ['Tarea 8 del Parcial 2', 'Tarea 9 del Parcial 2', 'Tarea 10 del Parcial 2'];
nuevasTareasParcial2.forEach(function(tarea) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = 'https://www.youtube.com';
    a.className = 'boton-enlace';
    a.innerText = tarea;
    li.appendChild(document.createTextNode('8 '));
    li.appendChild(a);
    ulParcial2.appendChild(li);
});

// Agregar nuevas tareas al Parcial 3
var nuevasTareasParcial3 = ['Tarea 1 del Parcial 3', 'Tarea 2 del Parcial 3', 'Tarea 3 del Parcial 3'];
nuevasTareasParcial3.forEach(function(tarea) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.href = 'https://www.youtube.com';
    a.className = 'boton-enlace';
    a.innerText = tarea;
    li.appendChild(document.createTextNode('1 '));
    li.appendChild(a);
    ulParcial3.appendChild(li);
});

