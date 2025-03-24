let pedidos = []

function agregarPedido() {
let id = Number(prompt("Ingrese el ID del pedido:"))
let nombreCliente = prompt("Ingrese el nombre del cliente:")
let correoCliente = prompt("Ingrese el correo del cliente:")

let productos = []
let continuar
do {
    let nombreProducto = prompt("Ingrese el nombre del producto:")
    let precioProducto = Number(prompt("Ingrese el precio del producto:"))
    let cantidadProducto = Number(prompt("Ingrese la cantidad:"))

    productos.push({
        nombre: nombreProducto,
        precio: precioProducto,
        cantidad: cantidadProducto
        })

continuar = prompt("¿Desea agregar otro producto? (sí/no)").toLowerCase()
    } while (continuar === "sí")

let fecha = prompt("Ingrese la fecha del pedido (dd/mm/yyyy):")
let estado = prompt("Ingrese el estado del pedido (pendiente/enviado/entregado):").toLowerCase()

let pedido = {
    id: id,
    cliente: {
        nombre: nombreCliente,
        correo: correoCliente
        },
        productos: productos,
        fecha: fecha,
        estado: estado
    };

pedidos.push(pedido)
console.log("Pedido agregado con éxito.")
}

function calcularTotalPedido() {
let id = Number(prompt("Ingrese el ID del pedido a calcular:"))
let pedido = pedidos.find(p => p.id === id)

if (!pedido) {
    console.log("Pedido no encontrado.")
    return
    }

let total = pedido.productos.reduce((suma, producto) => suma + (producto.precio * producto.cantidad), 0)
    console.log(`El total a pagar por el pedido ${id} es: $${total}`)
}

function pedidosPorEstado() {
let estado = prompt("Ingrese el estado de los pedidos a buscar (pendiente/enviado/entregado):").toLowerCase()
let filtrados = pedidos.filter(p => p.estado === estado)

if (filtrados.length === 0) {
    console.log("No hay pedidos con ese estado.")
    } else {
    console.log("Pedidos encontrados:", filtrados)
    }
}

function buscarPedidosPorCliente() {
let correo = prompt("Ingrese el correo del cliente:")
let pedidosCliente = pedidos.filter(p => p.cliente.correo === correo)

if (pedidosCliente.length === 0) {
    console.log("No hay pedidos registrados con ese correo.")
    } else {
    console.log("Pedidos del cliente:", pedidosCliente)
    }
}

function actualizarEstadoPedido() {
let id = Number(prompt("Ingrese el ID del pedido a actualizar:"))
let pedido = pedidos.find(p => p.id === id)

if (!pedido) {
    console.log("Pedido no encontrado.")
    return
    }

let nuevoEstado = prompt("Ingrese el nuevo estado del pedido (pendiente/enviado/entregado):").toLowerCase()
pedido.estado = nuevoEstado
console.log("Estado del pedido actualizado con éxito.")
}

function exportarPedidosJSON() {
let json = JSON.stringify(pedidos, null, 2)
    console.log("Pedidos exportados en formato JSON:", json)
}

function importarPedidosJSON() {
let json = prompt("Ingrese la cadena JSON de pedidos:")
try {
    pedidos = JSON.parse(json)
    console.log("Pedidos importados con éxito.")
    } catch (error) {
    console.log("Error al importar JSON, formato inválido.")
    }
}

function menu() {
let opcion
do {
    opcion = prompt(
        "Seleccione una opción:\n" +
        "1. Agregar pedido\n" +
        "2. Calcular total de un pedido\n" +
        "3. Buscar pedidos por estado\n" +
        "4. Buscar pedidos por cliente\n" +
        "5. Actualizar estado de un pedido\n" +
        "6. Exportar pedidos a JSON\n" +
        "7. Importar pedidos desde JSON\n" +
        "8. Salir"
        )

    switch (opcion) {
        case "1":
            agregarPedido()
            break
        case "2":
            calcularTotalPedido()
            break
        case "3":
            pedidosPorEstado()
            break
        case "4":
            buscarPedidosPorCliente()
            break
        case "5":
            actualizarEstadoPedido()
            break
        case "6":
            exportarPedidosJSON()
            break
        case "7":
            importarPedidosJSON()
            break
        case "8":
            console.log("Saliendo del sistema.")
            break
        default:
            console.log("Opción no válida, intente de nuevo.")
        }
    } while (opcion !== "8")
}

menu()