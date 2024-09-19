// Array para almacenar los productos seleccionados en el carrito
let carrito = [];

// Objeto con mis productos y precios disponibles en la tienda
const productos = {
    1: { nombre: 'Camisa', precio: 300 },
    2: { nombre: 'Pantalón', precio: 500 },
    3: { nombre: 'Zapatos', precio: 800 },
    4: { nombre: 'Sombrero', precio: 200 }
};

// Función para mostrar el menú de productos
function mostrarMenu() {
    return parseInt(prompt(`
        Seleccione un producto para agregar al carrito:
        1.- Camisa                      $300
        2.- Pantalón                    $500
        3.- Zapatos                     $800
        4.- Sombrero                  $200
        5.- Ver Carrito y Total
        6.- Salir
    `));
}

// Función para agregar un producto al carrito
function agregarAlCarrito(opcion) {
    if (productos[opcion]) {
        carrito.push(productos[opcion]);
        alert(`Producto "${productos[opcion].nombre}" agregado al carrito.`);
        console.log(`Producto "${productos[opcion].nombre}" agregado al carrito.`);
    } else {
        alert("Opción no válida.");
        console.log("Opción no válida.");
    }
}

// Función para mostrar el contenido del carrito y el total
function verCarrito() {
    // Verifica si el carrito está vacío
    if (carrito.length === 0) {
        // Si el carrito está vacío, muestra un mensaje de alerta
        alert("El carrito está vacío.");
    } else {
        // Si el carrito no está vacío, inicializa las variables para calcular el total
        let total = 0;  // Variable para almacenar el precio total de los productos en el carrito
        let mensaje = "Productos en el carrito de compras:\n";  // Mi mensaje inicial que se mostrará

        // Recorre cada producto en el carrito
        carrito.forEach((producto, index) => {
            // Añade la información del producto al mensaje, incluyendo el índice, nombre y precio
            mensaje += `${index + 1}.- ${producto.nombre} - $${producto.precio}\n`;
            // Acumula el precio del producto en la variable total
            total += producto.precio;
        });

        // Añade el total al mensaje
        mensaje += `\nTotal: $${total}`;

        // Muestra el mensaje final en una ventana emergente
        alert(mensaje);
        // También muestra el mensaje en la consola para fines de depuración
        console.log(mensaje);
    }
}


// Función principal que maneja el flujo del programa
function iniciarTienda() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarMenu();
        switch (opcion) {
            case 1:
                agregarAlCarrito(opcion);
                break;
            case 2:
                agregarAlCarrito(opcion);
                break;
            case 3:
                agregarAlCarrito(opcion);
                break;
            case 4:
                agregarAlCarrito(opcion);
                break;
            case 5:
                verCarrito();
                break;
            case 6:
                alert("Gracias por su compra ¡Vuelva pronto!");
                console.log("Gracias por su compra ¡Vuelva pronto!");
                continuar = false;
                break;
            default:
                alert("Opción no válida, intente nuevamente.");
        }
    }
}

// Iniciar la tienda
iniciarTienda();
