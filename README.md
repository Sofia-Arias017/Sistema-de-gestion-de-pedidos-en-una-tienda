# **2. Sistema de gestión de pedidos en una tienda**

Desarrolla un sistema básico de gestión de pedidos para una tienda en línea utilizando objetos y JSON. El sistema debe tener las siguientes funcionalidades:

1. Crea un array llamado `pedidos`, donde cada elemento sea un objeto que represente un pedido con estas propiedades:
   - `id` (número)
   - `cliente` (objeto con `nombre` y `correo`)
   - `productos` (array de objetos con `nombre`, `precio`, `cantidad`)
   - `fecha` (string en formato `"dd/mm/yyyy"`)
   - `estado` (string con valores posibles: `"pendiente"`, `"enviado"`, `"entregado"`)
2. Crea una función `agregarPedido(pedido)` que reciba un pedido y lo agregue al array `pedidos`.
3. Crea una función `calcularTotalPedido(id)` que reciba el `id` de un pedido y retorne el valor total a pagar (suma de `precio * cantidad` por cada producto).
4. Implementa una función `pedidosPorEstado(estado)` que devuelva todos los pedidos que coincidan con el estado indicado.
5. Crea una función `buscarPedidosPorCliente(correo)` que devuelva todos los pedidos hechos por un cliente según su correo electrónico.
6. Crea una función `actualizarEstadoPedido(id, nuevoEstado)` que permita cambiar el estado de un pedido.
7. Implementa `exportarPedidosJSON()` que retorne el contenido del array `pedidos` convertido a una cadena JSON.
8. Implementa `importarPedidosJSON(json)` que reciba una cadena JSON válida con pedidos y la convierta en el nuevo array `pedidos`.
