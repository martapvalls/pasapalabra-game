
var questions = [
    [        
        { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
        { letter: "a", answer: "aerosmith", status: 0, question: "CON LA A. Banda estadounidense de hard rock, su vocalista es Steven Tyler" },
        { letter: "a", answer: "altavoz", status: 0, question: "CON LA A. Transductor electroacústico utilizado para la reproducción de sonido" },
    ],
    [
        { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
        { letter: "b", answer: "bruja", status: 0, question: "CON LA B. Persona que practica la brujería" },
        { letter: "b", answer: "bucle", status: 0, question: "CON LA B. Permite repetir un bloque de código un número determinado de veces" }
    ],
    [
        { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
        { letter: "c", answer: "calambre", status: 0, question: "CON LA C. Dolor que produce un músculo del cuerpo cuando está contraído" },
        { letter: "c", answer: "caricatura", status: 0, question: "CON LA C. Dibujo divertido de una persona que hace más grandes y exagerados sus rasgos" }
    ],
    [
        { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
        { letter: "d", answer: "dictadura", status: 0, question: "CON LA D. Gobierno en el que una sola persona o un solo grupo tienen todo el poder" },
        { letter: "d", answer: "detective", status: 0, question: "CON LA D. Persona que investiga asuntos encargados por un cliente o por la policía" }
    ],
    [
        { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
        { letter: "e", answer: "enamorado", status: 0, question: "CON LA E. Que siente mucho amor por una persona o por algo" },
        { letter: "e", answer: "enfado", status: 0, question: "CON LA E. Situación o estado de ánimo de una persona que está disgustada o molesta con otra persona" }
    ],
    [
        { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
        { letter: "f", answer: "fabula", status: 0, question: "CON LA F. Cuento corto. Los protagonistas suelen ser animales y enseñan cosas buenas" },
        { letter: "f", answer: "friki", status: 0, question: "CON LA F. Persona considerada como extravagante, excéntrica o rara" }
    ],
    [
        { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
        { letter: "g", answer: "gryffindor", status: 0, question: "CON LA G. una de las cuatro casas en las que se dividen los estudiantes del Colegio Hogwarts de Magia y Hechicería en los libros de Harry Potter" },
        { letter: "g", answer: "gorra", status: 0, question: "CON LA G. Prenda de vestir que cubre la cabeza, generalmente de tela o piel, en especial la que tiene forma redonda y lleva una visera" }
    ],
    [
        { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
        { letter: "h", answer: "helio", status: 0, question: "CON LA H. Gas que, si una persona inhala una cantidad pequeña, su voz se modifica, volviéndose más aguda" },
        { letter: "h", answer: "zanahoria", status: 0, question: "CONTIENE LA H. Raíz comestible de esta planta, de color anaranjado y forma cónica y alargada." }
    ],
    [
        { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
        { letter: "i", answer: "ilustracion", status: 0, question: "CON LA I. Dibujo o fotografía" },
        { letter: "i", answer: "indemnizacion", status: 0, question: "CON LA I. Dinero o beneficio que una persona recibe por un daño que ha recibido o un perjuicio que ha sufrido" }
    ],
    [
        { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
        { letter: "j", answer: "jaula", status: 0, question: "CON LA J. Caja o espacio rodeado de rejas donde se mete a algunos animales" },
        { letter: "j", answer: "jiñar", status: 0, question: "CON LA J. Defecar, hacer caca. Es una expresión vulgar que no debe usarse de manera habitual" }
    ],
    [
        { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
        { letter: "k", answer: "khaleesi", status: 0, question: "CON LA K. Título que los Dothraki asignan a Daenerys Targaryen" },
        { letter: "k", answer: "karaoke", status: 0, question: "CON LA K. Entretenimiento que consiste en cantar canciones conocidas. La persona que canta escucha la música de fondo y lee la letra en una pantalla de vídeo" }
    ],
    [
        { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
        { letter: "l", answer: "limusina", status: 0, question: "CON LA L. Automóvil lujoso y muy largo, en ocasiones con el interior dividido en dos partes por un cristal corredizo que separa al conductor de los pasajeros." },
        { letter: "l", answer: "lennon", status: 0, question: "CON LA L. Famoso miembro fundador de la banda de rock The Beatles, junto a Paul McCartney" }
    ],
    [
        { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
        { letter: "m", answer: "metralleta", status: 0, question: "CON LA M. Arma de fuego portátil, con cañón de poca longitud, que dispara balas de manera sucesiva e ininterrumpida mientras se aprieta el gatillo." },
        { letter: "m", answer: "machismo", status: 0, question: "CON LA M. Actitud de creer que los hombres son superiores a las mujeres" }
    ],
    [
        { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
        { letter: "n", answer: "narcotico", status: 0, question: "CON LA N. Sustancia que produce sueño, relajación del cuerpo o pérdida de la sensibilidad" },
        { letter: "n", answer: "nausea", status: 0, question: "CON LA N. Arcada, malestar de estómago que produce ganas de vomitar" }
    ],
    [
        { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
        { letter: "ñ", answer: "apuñalar", status: 0, question: "CONTIENE LA Ñ. Herir o matar a alguien con un puñal u otra arma blanca." },
        { letter: "ñ", answer: "muñeca", status: 0, question: "CONTIENE LA Ñ. Parte del brazo humano donde la mano se une con el antebrazo." }
    ],
    [
        { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
        { letter: "o", answer: "obeso", status: 0, question: "CON LA O. Referido a una persona excesivamente gorda o gruesa" },
        { letter: "o", answer: "obstinado", status: 0, question: "CON LA O. Terco, que mantiene su opinión o intención frente a los demás o frente a problemas o dificultades" }
    ],
    [
        { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
        { letter: "p", answer: "potter", status: 0, question: "CON LA P. Apellido del mago más famoso del mundo, estudió en Hogwarts" },
        { letter: "p", answer: "poseidon", status: 0, question: "CON LA P. Dios de los mares y, como «Agitador de la Tierra», de los terremotos en la mitología griega" }
    ],
    [
        { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
        { letter: "q", answer: "quemadura", status: 0, question: "CON LA Q. Herida causada en la piel por el fuego o algo que quema, como el sol o el aceite caliente" },
        { letter: "q", answer: "quimioterapia", status: 0, question: "CON LA Q. Tratamiento en el que se usan productos químicos para combatir enfermedades" }
    ],
    [
        { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
        { letter: "r", answer: "reciclar", status: 0, question: "CON LA R. Someter un material a un proceso determinado para poder usarlo otra vez" },
        { letter: "r", answer: "resilencia", status: 0, question: "CON LA R. Capacidad de una persona para adaptarse y superar situaciones traumáticas o adversas" }
    ],
    [
        { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
        { letter: "s", answer: "saruman", status: 0, question: "CON LA S. El Blanco, uno de los antagonistas principales en la novela fantástica El Señor de los Anillos" },
        { letter: "s", answer: "simpson", status: 0, question: "CON LA S. Familia de Springfield más famosa" }
    ],
    [
        { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
        { letter: "t", answer: "tarantino", status: 0, question: "CON LA T. Director, productor, guionista, editor y actor de cine estadounidense, Pulp Fiction es una de sus obras" },
        { letter: "t", answer: "thor", status: 0, question: "CON LA T. Uno de los vengadores de Marvel, su arma es un martillo" }
    ],
    [
        { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
        { letter: "u", answer: "utopia", status: 0, question: "CON LA U. Objetivo o deseo que es bueno, pero que es imposible de conseguir en la realidad" },
        { letter: "u", answer: "uva", status: 0, question: "CON LA U. Fruto verde o morado que crece en racimos" }
    ],
    [
        { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
        { letter: "v", answer: "viserion", status: 0, question: "CON LA V. Dragón de Juego de Tronos, eclosionado por Daenerys Targaryen junto con sus dos hermanos Drogon y Rhaegal" },
        { letter: "v", answer: "voldemort", status: 0, question: "CON LA V. Enemigo principal de Harry Potter, quien según una profecía, tiene el poder de vencerlo" }
    ],
    [
        { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
        { letter: "w", answer: "will", status: 0, question: "CON LA W. De apellido Smith, actor protagonista de la película: en busca de la felicidad" },
        { letter: "w", answer: "whisky", status: 0, question: "CON LA W. Bebida alcohólica fuerte y de color marrón." }
    ],
    [
        { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
        { letter: "x", answer: "claxon", status: 0, question: "CONTIENE LA X. Instrumento eléctrico que se emplea como avisador sonoro en los automóviles y otros vehículos modernos" },
        { letter: "x", answer: "toxico", status: 0, question: "CONTIANA LA X. Que es venenoso o que puede causar trastornos o la muerte a consecuencia de las lesiones debidas a un efecto químico" }
    ],
    [
        { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},
        { letter: "y", answer: "yoda", status: 0, question: "CON LA Y. Último Jedi de la Antigua Orden." },
        { letter: "y", answer: "inyeccion", status: 0, question: "CON LA Y. Acción que consiste en introducir un líquido o un gas a presión en el interior de un cuerpo" }
    ],
    [
        { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
        { letter: "z", answer: "zanjar", status: 0, question: "CON LA Z. Terminar un asunto difícil o con muchos problemas" },
        { letter: "z", answer: "zigzag", status: 0, question: "CON LA Z. Línea que forma ángulos similares a la letra Z cuando es vertical y parecidos a montañas seguidas cuando es horizontal." }
    ],
]






let instrucciones = document.getElementById('instrucciones')
let respuestas = document.getElementById('respuestas')
let ranking = document.getElementById('containerranking')
let usuario = document.getElementById("usuario")
let definicionactual = document.getElementById("definicionactual")
let campoRespuesta = document.getElementById("camporespuesta")
let numeroaciertos = document.getElementById("numeroaciertos")
let puntuacion = document.getElementById("puntuacion")
let rankingtotal = document.getElementById("rankingtotal")
let todascorrectas = document.getElementById("todascorrectas")

//botones
let iniciar = document.getElementById('botonjugar');
let responder = document.getElementById("responder");
let pasapalabra = document.getElementById("pasapalabra");
let stop = document.getElementById("stop");
let volverjugar = document.getElementById("volverjugar");
let cerrar = document.getElementById("cerrar");



// establecer los segundos
let tiempo = document.getElementById('tiempo')
    tiempo.innerHTML = "150";


//variables globales 

let aciertos = 0;
let fallos = 0;
let rondas = 0;
let totales = 0;
let palabrasrestantes = 27;
let preguntasJuego = [];
let rankingJugadores = [];

//quitar instrucciones y guardar usuario, iniciar el pasapalabra

iniciar.addEventListener('click', function inicio(){
    
    if(usuario.value !== ''){
    instrucciones.style.display = 'none';
    respuestas.style.display = 'flex';
    usuario = document.getElementById("usuario").value;
    contador();
    preguntasRandom();
    mostrarDefinicion();

    }
})


// para empezar la cuenta atrás y enlazarlo en el DOM y si sacaba el tiempo finalizar la partida

function contador() {
    tiempoRestante = 150;

    timer = setInterval(function() {
        tiempoRestante--;

        if (tiempoRestante === 0) {
            clearInterval(timer);
            alert('¡Se ha acabado el tiempo!');
            finalizarJuego()
        }
        tiempo.innerHTML = tiempoRestante;
    },1000)
}


//crear array con las definiciones random para el player

function preguntasRandom(){
    for(let i in questions){
      elegida = Math.floor(Math.random() * 3);
      preguntasJuego.push(questions[i][elegida])
    }
    };

//mostrar las definiciones, con el campo respuesta vacio y el foco puesto en el campo donde tiene q responder el usuario

function mostrarDefinicion() {
    let definicionactual = document.getElementById("definicionactual")
    definicionactual.innerHTML = preguntasJuego[totales].question;
    document.getElementById("camporespuesta").value = "";
    campoRespuesta.focus();
    
}

//cambiar a la siguiente definicion y vaciar la respuesta

function continuarJugando() {
   
	if (aciertos + fallos < 27) {
        mostrarDefinicion(totales)
        document.getElementById("camporespuesta").value = "";
	} else if(aciertos === 27){
        todasCorrectas();
    } else {
        finalizarJuego();
    }
}

//comprobar la respuesta para pintarla del color correspondiente en caso de acierto o fallo

function comprobarRespuesta(){
    campoRespuesta = document.getElementById("camporespuesta").value
    campoRespuesta = campoRespuesta.toLowerCase();
    
    if(campoRespuesta === preguntasJuego[totales].answer){
        preguntasJuego[totales].status = "correcta"
        aciertos++
        numeroaciertos.textContent = aciertos
        document.getElementById(preguntasJuego[totales].letter).style.backgroundImage = "radial-gradient(circle, #9ee379, #4caf50)";
        

    } else if(campoRespuesta !== preguntasJuego[totales].answer){
        preguntasJuego[totales].status = "incorrecta"
        fallos++
        document.getElementById(preguntasJuego[totales].letter).style.backgroundImage = "radial-gradient(circle, #b9121b, #8e001c)";
    }
    totales++;
    palabrasrestantes--;
    
}

//dar click a responder para comprobar las respuestas

responder.addEventListener('click', function resp(){
    comprobarRespuesta();
    continuarJugando();
})

//para que funcione también con intro 

campoRespuesta.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
       document.getElementById("responder").click();
    }
  });


//boton para parar en cualquier momento, no se añade al ranking al jugador

stop.addEventListener('click', function stopp(){

    todascorrectas.style.display = 'none';
    respuestas.style.display = 'none';
    ranking.style.display = 'flex';
    clearInterval(timer);
    puntuacion.innerHTML = (`Pasapalabra incompleto con ${aciertos} aciertos y ${fallos} errores`)
})

//funcion para poder utilizar pasapalabra y pasar a la siguiente definicion, guardando la palabra para la siguiente ronda

function pasapalabraa(){
    
    document.getElementById(preguntasJuego[totales].letter).style.backgroundImage = "radial-gradient(circle, #ABB2B9, #566573)";
    let pal = preguntasJuego.splice(totales, 1)[0]
    preguntasJuego.push(pal)

    continuarJugando()
}


pasapalabra.addEventListener('click', pasapalabraa)

//para poder usar la tecla espacio también en vez del botón pasapalabra

campoRespuesta.addEventListener("keyup", function(event) {
    if (event.keyCode === 32) {
       document.getElementById("pasapalabra").click();
    }
  });

//funcion para cuando se aciertan todas las palabras del rosco

function todasCorrectas(){
    todascorrectas.style.display = 'flex';
}

cerrar.addEventListener('click', finalizarJuego)

//funcion para finalizar el juego y mostrar puntuación, parar reloj

function finalizarJuego() {
    todascorrectas.style.display = 'none';
    respuestas.style.display = 'none';
    ranking.style.display = 'flex';
    clearInterval(timer);
    puntuacion.innerHTML = (`¡Enhorabuena ${usuario}! Pasapalabra completado con ${aciertos} aciertos y ${fallos} errores`)
    mostrarRanking();
    
}

//funcion para mostrar el ranking

function mostrarRanking(){
    
    rankingJugadores.push({usuario: usuario, aciertos: aciertos});
    rankingJugadores.sort((a,b) => b.aciertos - a.aciertos);

    rankingJugadores.forEach(function(element) {
            let jugador = document.createElement("p");
            jugador.className = "jugador";
            jugador.innerHTML = (`Jugador/a ${element.usuario}: ${element.aciertos} puntos`) 
            rankingtotal.appendChild(jugador);
            jugador.style.textAlign = "center";
        });
  
}


//boton volver a jugar

volverjugar.addEventListener('click', function reiniciar(){
    nuevojuego();
    instrucciones.style.display = 'flex';
    ranking.style.display = 'none';

} )


//funcion para volver a jugar, reiniciar variables y volver a pantalla de inicio

function nuevojuego(){
    reiniciarLetras()
    aciertos = 0;
    fallos = 0;
    rondas = 0;
    totales = 0;
    palabrasrestantes = 27;
    preguntasJuego = [];

    if(rankingtotal.hasChildNodes()){
    while(rankingtotal.childNodes.length >= 1){
        rankingtotal.removeChild( rankingtotal.firstChild );
        }
    }
    

    tiempo.innerHTML = "150";
    document.getElementById("usuario").value = "";  //reiniciar nombre usuario

    for(let i in preguntasJuego){
        preguntasJuego[i].status = 0
    }
    
}

//reiniciar el background de las letras del fondo 

function reiniciarLetras() {
    let letras = document.getElementsByClassName("letra");
    for (let i = 0; i < letras.length; i++) {
        letras[i].style.backgroundImage = "radial-gradient(circle, #0074d9, #004b8d)";
    }

}



