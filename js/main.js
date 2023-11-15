// alert("Hello!!")
console.dir(document);
function AgregarCurso(){
    // alert("Agregar Curso!!");
    const curso = document.getElementById('curso').value;
    console.log("Nomdre del curso: " + curso);
    localStorage.curso = curso;

    const nomMat = document.getElementById('nomMateria').value;
    console.log("Nomdre de la materia: " + nomMat);
    localStorage.materia = nomMat;

    const nomDocente = document.getElementById('nomDocente').value;
    console.log("Nomdre del docente: " + nomDocente);
    localStorage.docente = nomDocente;

    const turno = document.getElementById('turnoCurso').value;
    console.log("Turno: " + turno);
    localStorage.turno = turno;

    console.log(localStorage.curso + " / " + localStorage.materia + " / " + localStorage.docente + " / " + localStorage.turno);

    window.location.href = 'index.html';


    //Hasta aca funciona correctamente

    const contenedor = document.getElementById('contenedor_de_cursos');
    const divCurso = document.createElement('div');
    divCurso.classList.add('materia');
    const spanCurso = document.createElement('span');
    spanCurso.innerHTML = localStorage.curso;
    divCurso.appendChild(spanCurso);
    contenedor.appendChild(divCurso);
    document.body.appendChild(contenedor);
    
/*     localStorage.setItem("curso", curso)
    console.log(localStorage.getItem("curso")); */




    /* const contParent = document.getElementById('contenedor__principal');
    const element = document.createElement('p');
    element.innerHTML = curso;
    console.log(element);
    contParent.appendChild(element);
    document.body.main.appendChild(element);
 */
    /* const contParent = document.getElementById('contenedor__CrearCurso');
    console.log(contParent);
    const element = document.createElement('p');
    element.innerHTML = "Parrafo agregado JS";
    console.log(element);
    // contParent.appendChild(element);
    document.body.contParent.appendChild(element); */

    
    /** 
    //Intento de agregar un div de curso al resto del documento
    const contenedorCursos = document.getElementById('content__cursos'); //Sekeccionon el div en el que se va a agregar los cursos
    console.log(contenedorCursos);
    const contCurso = createElement('div'); //Creo el contenedor div
    contCurso.classList.add("materia"); //:e agrego la clase al div
    const parrafo = createElement('p'); //Creo el elemento parrafo
    parrafo.innerHTML = "Div creado con JS" //Le agrego texto para probarlo
    contCurso.appendChild(parrafo); //Agrego el parrafo al contenedor de curso
    contenedorCursos.appendChild(contCurso); //Agrego el contenedor de un curso al contenedor general de cursos
    document.body.main.contenedor__principal.contenedor__cursos.appendChild(contCurso); //Lo agrego todo al documento

    // let span = document.createElement('span');
    // span.innerHTML = curso;
    // console.log('Valor de span: ' + span);

    */
}

// let divParet = document.getElementById('cont__cursos');
// let span = document.createElement('span');
// span.value = curso;
// console.log('Valor de span: ' + span);
// divParet.appendChild(span);
// divParet.innerHTML = '<span>{curso}</span>';



//Login - FUNCIONA
function login(){
    console.log("Entrando...")
    const user = document.getElementById('user').value;
    const pass = document.getElementById('password').value;
     if(user == 'Admin' && pass == '111'){
        window.location.href = 'index.html';
        localStorage.usuario = user;
        localStorage.password = pass;
        console.log(user);
        console.log(pass);
    }
    else{
        alert('Datos erroneos');
    }
}

