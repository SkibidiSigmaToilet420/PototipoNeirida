let fondo = document.querySelector(".general")
let titulo = document.querySelector(".titulo")
let labelMetodo = document.querySelector(".label1")
let labelDireccion = document.querySelector(".label2")
let img = document.querySelector(".imagen")
let precio = document.querySelector(".info label")
let imagen = localStorage.getItem('imagen');
var boton1 = document.querySelector(".boton")



function sweetSimple(datos,producto){
    Swal.fire({
    title: producto,
    text: datos,
    icon: 'info',
    confirmButtonText: 'Comprar',
    showCloseButton: true
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Compra:",
                text: "Compra realizada con exito!",
                icon: "info",
            });
        }
    });
}

boton1.addEventListener("click", function(){
    metodo = document.querySelector(".metodo").value
    direccion = document.querySelector(".direccion").value
    datos = "el precio del artículo es: "+info+", su metodo elegido fué: "+metodo+" y la direccion elegida fué: "+direccion
    sweetSimple(datos,nombre)
})

function validateImage() {
    const fileInput = document.getElementById('imageUpload');
    const errorMessage = document.getElementById('errorMessage');
    const file = fileInput.files[0];
    const imgElement = document.querySelector(".imgageningresada img"); // Target the correct img element

    if (file) {
        const fileType = file.type;
        if (fileType !== 'image/png') {
            errorMessage.textContent = 'Error: Solo se permiten imágenes en formato PNG.';
            imgElement.src = ""; // Reset the src of the img element
            // Retain the last valid image
             
        } else {
            errorMessage.textContent = 'Todo correcto. Imagen lista para subir.';
            const imageUrl = URL.createObjectURL(file); // Create a URL for the image
            imgElement.src = ""; // Set the src of the img element
            lastImageUrl = imageUrl; // Update the last valid image URL
            imgElement.src = lastImageUrl;
            localStorage.setItem('Cocacola', imgElement.src);
            console.log("Imagen guardada en localStorage"+imgElement.src);

            }
        }
}

