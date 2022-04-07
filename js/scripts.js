
// Generamos número aleatorio entre 1 y 100 y lo almacenamos en una variable
// Lo mostramos por consola

var numRand = Math.floor(Math.random() * 101);
console.log(numRand)

// Función para boton de recargar, donde cargará nuevo número e intentos.
function recargar(){
    location.reload(true);
}

//Creo variable donde alertaré al ususario sobre la cercanía al número aleatorio
const alerta = document.createElement('P');

//creo variable y seleccionamos la clase numersosErroneos.
const lista = document.querySelector('.numerosErroneos');


// crear lista posibles alertas si el numero está mas abajo

const respuestasArriba = ['Está mas abajo','Hey tio, mira abajo','Sigue bajando','Pero mira abajo crack','Bro sigue bajando'];

const respuestasAbajo = ['Mira por arriba','Sube a la azotea','Sigue subiendo','Pero mira arriba','Más arriba...'];

// Función para botón de 'Probar suerte'
function comprobar(){

    mostrarContador(++contador);

    const numeroIntroducido = parseInt(document.querySelector('#numero').value);
    const listaNumeros = document.createElement('li')
    listaNumeros.textContent = numeroIntroducido;
    lista.appendChild(listaNumeros)
    console.log(numeroIntroducido); 
    
    // EL siguiente if , eliminará la alerta si ya tiene contenido
    if (alerta.textContent !== ''){
        alerta.remove();
    }

    // Comprobamos si el num introducido está mas abajo o más arriba del numero generado
    if(numeroIntroducido == numRand){
        alerta.textContent = 'Lo has clavado sosio';
        alerta.classList.add('correcto');

        //cambiaremos el contenido del p con clase total:
        const total = document.querySelector('.total')
        total.textContent = `Has tenido un total de ${contador} intentos`
        // Recargaremos la página si acierta a los 5 segundos
        // setTimeout("location.reload(true);",5000);
        if(contador <= 3){
            alerta.textContent = 'Vaya máquina, en menos de 3 intentos'
        }else if(contador > 3 && contador < 8){
            alerta.textContent = 'Has acertado con varios intentos más'
        }else{
            alerta.textContent = 'Has tardado en acertar un poco...'
        }
        const botonRecarga = document.querySelector('.boton__recarga');
        botonRecarga.classList.remove('oculto');
        
    }
    else if(numeroIntroducido < numRand ){
        const random = Math.floor(Math.random() * respuestasAbajo.length);
        const numeroActual = respuestasAbajo[random]
        console.log('Más arriba');
        alerta.textContent = numeroActual;
        alerta.classList.add('incorrecto');

    }
    else if(numeroIntroducido > numRand){
        const random = Math.floor(Math.random() * respuestasArriba.length);
        const numeroActual = respuestasArriba[random]
        console.log('incorrecto')
        alerta.textContent = numeroActual;
        alerta.classList.add('incorrecto');
        
    }
    else{
        alerta.textContent = '¡INTRODUCE ALGÚN NÚMERO!';
        alerta.classList.add('incorrecto');
    }

    formulario.appendChild(alerta);

    // // Si falla, eliminaremos la alerta a los 2 segundos
    // if (numeroIntroducido < numRand || numeroIntroducido > numRand){
    //     setTimeout(() => {
    //     alerta.remove();
    // }, 2000);
    // }

}


// Creamos variable de contador y mostramos con funciones
let contador = 0;
mostrarContador();

function mostrarContador(){
    document.querySelector('#contador').innerHTML = contador;
}



// Evitaremos la opcion por defecto de recargar la página cada vez que
// clicamos el submit

const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
})