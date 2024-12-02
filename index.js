let boton = document.getElementsByTagName("button");

function eliminarPelicula(boton) {
    console.log("Elemento pasado por parámetro: ", boton);
    boton.parentNode.remove();
    console.log("Elemento padre: ", boton.parentNode);
    console.log("Película eliminada: ", boton.parentNode.querySelector("span").textContent);
}

/*Función vista en clase para cambiar aleatoriamente
el color de los botones*/
function cambiarColorFondo() {
    const letras = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 16)];
        console.log("Elemento para formar la variable color: ", color);
        
    }
    document.body.style.backgroundColor = color;
}