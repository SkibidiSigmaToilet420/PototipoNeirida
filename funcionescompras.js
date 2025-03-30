let tamaño = document.querySelector("#Tamaño")
let formularioP =  document.querySelector(".formulario form p")
let boton =  document.querySelector("#botonComprar")
let imagen = localStorage.getItem('Cocacola');
let img = document.querySelector(".Imagenpedido img")
img.src= imagen

let precio=0;

precio.textContent = info


function sweetSimple(producto,datos){
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
                
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = "item.html"
                }else{
                    window.location.href = "item.html"
                }
            });
        }
    });
}

function alo(){
    sweetSimple("Impresion DTF", "Usted va comprar un total de: "+tamaño.value+" Centimetros a un precio de "+precio.toFixed(2)+" Bolivares, esta seguro?");
}

function CalcularPrecio(){
    precio=parseFloat(tamaño.value)*7.80;
    formularioP.textContent = "El precio es de: "+precio.toFixed(2)+"Bs.";
}