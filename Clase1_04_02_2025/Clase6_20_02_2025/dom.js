// Clase Producto
class Producto {
    constructor(nombre) {
        this.nombre = nombre;
    }

    // Método para mostrar información del producto
    mostrarInfo() {
        return this.nombre
}

// Clase ProductoConDescuento que hereda de Producto    }

    // Método para calcular el precio con descuento

    // Sobreescribir el método mostrarInfo para incluir el descuento
    mostrarInfo() {
        return this.nombre
    }
}

// Capturar el formulario del DOM
const formulario = document.getElementById("producto-form");
const listaProductos = document.getElementById("lista-productos");

// Evento para manejar la adición de productos
formulario.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    
    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value;

    // Crear un elemento de lista y agregarlo al DOM
    const item = document.createElement("li");

    
    let nuevoProducto;
        nuevoProducto = new Producto(nombre);
    }

    
    
    item.textContent = nuevoProducto.mostrarInfo();
    listaProductos.appendChild(item);

    // Limpiar formulario
    formulario.reset();
});