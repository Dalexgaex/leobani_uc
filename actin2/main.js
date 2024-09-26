const readline = require('readline');

// Configuración del readline para capturar entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para capturar la entrada del usuario en una promesa
function preguntar(texto) {
    return new Promise((resolve) => {
        rl.question(texto, (respuesta) => resolve(respuesta));
    });
}

function invertirArreglo(arr) {
    return arr.reverse();
}

function buscarElemento(matriz, elemento) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === elemento) {
                return true;
            }
        }
    }
    return false;
}

function calcularPesos(pesos) {
    let promedio = pesos.reduce((sum, peso) => sum + peso, 0) / pesos.length;
    let masAltos = pesos.filter(peso => peso > promedio).length;
    let masBajos = pesos.filter(peso => peso < promedio).length;

    return { promedio, masAltos, masBajos };
}

function calcularPromedios(cursos) {
    let promedios = cursos.map(curso => curso.reduce((sum, nota) => sum + nota, 0) / curso.length);
    let maxPromedio = Math.max(...promedios);
    let cursosMejores = [];

    promedios.forEach((promedio, index) => {
        if (promedio === maxPromedio) {
            cursosMejores.push(index);
        }
    });

    return cursosMejores;
}

function calcularSueldos(empleados) {
    let totales = empleados.map(sueldos => sueldos.reduce((sum, sueldo) => sum + sueldo, 0));
    let totalGeneral = totales.reduce((sum, total) => sum + total, 0);
    let mayorIngreso = Math.max(...totales);
    let indiceMayorIngreso = totales.indexOf(mayorIngreso);

    return { totales, totalGeneral, indiceMayorIngreso };
}

async function menu() {
    let opcion = 0;
    while (opcion !== 6) {
        console.log("\nSeleccione una operación:");
        console.log("1. Invertir arreglo");
        console.log("2. Buscar elemento en arreglo 2D");
        console.log("3. Calcular promedios de pesos");
        console.log("4. Mostrar curso con mejor promedio");
        console.log("5. Calcular sueldos acumulados");
        console.log("6. Salir");

        opcion = parseInt(await preguntar("Ingrese el número de la operación que desea realizar: "));

        switch (opcion) {
            case 1:
                // Invertir un arreglo
                let tamañoArreglo = parseInt(await preguntar("Ingrese el tamaño del arreglo: "));
                let arreglo = [];
                for (let i = 0; i < tamañoArreglo; i++) {
                    arreglo.push(parseFloat(await preguntar(`Ingrese el valor ${i + 1}: `)));
                }
                console.log("Arreglo invertido:", invertirArreglo(arreglo));
                break;

            case 2:
                // Buscar un elemento en un arreglo 2D
                let filas = parseInt(await preguntar("Ingrese el número de filas de la matriz: "));
                let columnas = parseInt(await preguntar("Ingrese el número de columnas de la matriz: "));
                let matriz = [];
                for (let i = 0; i < filas; i++) {
                    let fila = [];
                    for (let j = 0; j < columnas; j++) {
                        fila.push(parseFloat(await preguntar(`Ingrese el valor en la posición [${i + 1}][${j + 1}]: `)));
                    }
                    matriz.push(fila);
                }
                let elementoBuscar = parseFloat(await preguntar("Ingrese el elemento a buscar: "));
                console.log("Elemento encontrado:", buscarElemento(matriz, elementoBuscar));
                break;

            case 3:
                // Calcular promedios de pesos
                let pesos = [];
                for (let i = 0; i < 10; i++) {
                    pesos.push(parseFloat(await preguntar(`Ingrese el peso de la persona ${i + 1}: `)));
                }
                let { promedio, masAltos, masBajos } = calcularPesos(pesos);
                console.log(`Promedio de pesos: ${promedio}`);
                console.log(`Personas con peso mayor al promedio: ${masAltos}`);
                console.log(`Personas con peso menor al promedio: ${masBajos}`);
                break;

            case 4:
                // Calcular el curso con mejor promedio
                let cursos = [];
                for (let i = 0; i < 5; i++) {
                    let curso = [];
                    console.log(`\nIngrese las notas del curso ${i + 1}:`);
                    for (let j = 0; j < 5; j++) {
                        curso.push(parseFloat(await preguntar(`Nota del alumno ${j + 1}: `)));
                    }
                    cursos.push(curso);
                }
                let mejoresCursos = calcularPromedios(cursos);
                console.log("Cursos con el mejor promedio general: ");
                mejoresCursos.forEach(curso => {
                    console.log(`Curso ${curso + 1}`);
                });
                break;

            case 5:
                // Calcular sueldos acumulados
                let empleados = [];
                for (let i = 0; i < 5; i++) {
                    let sueldos = [];
                    console.log(`\nIngrese los sueldos del empleado ${i + 1}:`);
                    for (let j = 0; j < 5; j++) {
                        sueldos.push(parseFloat(await preguntar(`Sueldo del mes ${j + 1}: `)));
                    }
                    empleados.push(sueldos);
                }
                let { totales, totalGeneral, indiceMayorIngreso } = calcularSueldos(empleados);
                console.log("Sueldos acumulados:", totales);
                console.log("Total pagado en sueldos:", totalGeneral);
                console.log("Empleado con mayor ingreso acumulado:", indiceMayorIngreso + 1);
                break;

            case 6:
                console.log("Saliendo del programa...");
                rl.close(); // Cierra el readline para finalizar la ejecución
                break;

            default:
                console.log("Opción no válida. Intente de nuevo.");
        }
    }
}

menu();
