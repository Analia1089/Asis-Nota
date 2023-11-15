function entrar() {
    console.log("Entrando...");
    const user = document.getElementById('usuarioPrincipal').value;
    const pass = document.getElementById('passPrincipal').value;
    console.log(user, pass);

    if ((user == "ana" && pass == "123") || (user == "naomi" && pass == "321")) {
        window.location.href = 'panel.html';
        localStorage.usuario = user;
        localStorage.password = pass;
        console.log(user);
        console.log(pass);
    }
    else {
        alert('Datos erroneos');
    }

    const contenedor = document.getElementById('divCont');
    const divCurso = document.createElement('div');
    divCurso.classList.add('materia');
    const spanCurso = document.createElement('span');
    spanCurso.innerHTML = localStorage.usuario;
    divCurso.appendChild(spanCurso);
    contenedor.appendChild(divCurso);
    document.body.appendChild(contenedor);
}
