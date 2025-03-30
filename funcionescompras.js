let tamaño = document.querySelector("#Tamaño")
let formularioP =  document.querySelector(".formulario form p")
let boton =  document.querySelector("#botonComprar")


let nombre = localStorage.getItem('nombre');
let imagen = localStorage.getItem('Cocacola');
let info = localStorage.getItem('info');
let modo = localStorage.getItem("modo")

let h1 = document.querySelector("h1")
let img = document.querySelector(".Imagenpedido img")

img.src= imagen

let metodo = ""
let direccion = ""

var boton1 = document.querySelector(".boton")
var items = document.querySelectorAll(".item")

let precio=0;

//h1.textContent = nombre

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

boton.addEventListener("click", function(){
    
})



boton1.addEventListener("click", function(){
    metodo = document.querySelector(".metodo").value
    direccion = document.querySelector(".direccion").value
    datos = "el precio del artículo es: "+info+", su metodo elegido fué: "+metodo+" y la direccion elegida fué: "+direccion
    sweetSimple(datos,nombre)
})



function claro(){

    fondo.style.backgroundImage = "linear-gradient(to bottom, #FFFFFF, #e4fff9)"

    titulo.style.color = "#003BAB"

    precio.style.color = "#00A587";

    labelMetodo.style.color = "#00A587"
    labelDireccion.style.color = "#00A587"

    boton1.style.color = "#003BAB"

}

function oscuro(){

    fondo.style.backgroundImage = "linear-gradient(to bottom, #004377, #00345D)"

    titulo.style.color = "#FFFFFF"

    precio.style.color = "#51B3FF";

    labelMetodo.style.color = "#51B3FF"
    labelDireccion.style.color = "#51B3FF"

    boton1.style.color = "#003BAB"

}
    
if (modo == 0){
    claro()
}else{
    oscuro()
}


function CalcularPrecio(){
    precio=parseFloat(tamaño.value)*7.80;
    formularioP.textContent = "El precio es de: "+precio.toFixed(2)+"Bs.";
}