let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let total = 0;

carrito.forEach(item => total += item.precio);

actualizarCarrito();

function agregarCarrito(nombre, precio, idTalla, idColor) {
    let talla = document.getElementById(idTalla).value;
    let color = document.getElementById(idColor).value;

    carrito.push({ nombre, precio, talla, color });
    total += precio;

    guardarCarrito();
    actualizarCarrito();
}

function actualizarCarrito() {
    let lista = document.getElementById("listaCarrito");
    lista.innerHTML = "";

    carrito.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `
            ${item.nombre} - ${item.talla} - ${item.color} - $${item.precio}
            <button onclick="eliminarProducto(${index})">❌</button>
        `;
        lista.appendChild(li);
    });

    document.getElementById("total").textContent = total;
    document.getElementById("contador").textContent = carrito.length;
}

function eliminarProducto(index) {
    total -= carrito[index].precio;
    carrito.splice(index, 1);
    guardarCarrito();
    actualizarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    total = 0;
    guardarCarrito();
    actualizarCarrito();
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function mostrarCarrito() {
    let carritoDiv = document.getElementById("carrito");
    carritoDiv.style.display =
        carritoDiv.style.display === "none" ? "block" : "none";
}
