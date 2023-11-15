// alert("Hello!!")
console.dir(document);
function AgregarCurso(){
    // alert("Agregar Curso!!");
    //Funciona
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
    
/*     localStorage.setItem("curso", curso)
    console.log(localStorage.getItem("curso")); */  
    

}


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

function eliminar(x){
    const tareaAEliminar = document.getElementById(x);
    tareaAEliminar.style.display = 'none';
}


function editar(x){
    const tareaAEditar = document.getElementById(x);
    tareaAEditar.innerHTML = prompt('Ingresa el contenido de la tarea')
}
