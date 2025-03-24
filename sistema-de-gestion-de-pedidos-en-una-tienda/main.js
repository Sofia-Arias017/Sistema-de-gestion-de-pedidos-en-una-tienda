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