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
