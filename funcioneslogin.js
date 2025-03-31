function validarLogin() {
    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;
    
    if(usuario.tolower === "admin" && contrasena === "12345") {
        Swal.fire({
            title: 'Bienvenido Administrador',
            icon: 'success'
        }).then(() => {
            window.location.href = "admin.html";
        });
    } else if(usuario && contrasena) {
    
        window.location.href = "item.html";
    } else {
        Swal.fire({
            title: 'Error',
            text: 'Por favor complete ambos campos',
            icon: 'error'
        });
    }
}

// Asignar evento al botón
document.getElementById("boton").addEventListener("click", validarLogin)