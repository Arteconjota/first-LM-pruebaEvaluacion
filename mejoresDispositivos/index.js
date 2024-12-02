let header = document.getElementsByTagName("header");
let item = document.getElementsByClassName("item");
let lista = document.getElementById("lista");
let spanNodo = document.getElementsByTagName("span");

function modificarDOM() {
    header[0].style.fontStyle = "italic";
    for (let i = 0; i < item.length; i++) {
        item[i].style.backgroundColor = "tan";
    }
    lista.style.marginBottom = "10px";
    spanNodo[0].innerHTML = "CAMBIADO";
}

function eliminarDOM() {
    spanNodo[spanNodo.length-1].parentNode.remove();
}