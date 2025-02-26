
Endpoints *PRODUCTO*

| METHOD      | Endpoint     |Descripcion                       |    
|----------   |---------     |----------                        |
| GET         | /productos   |Muestra  todos los productos      |
| POST        | /productos   | crea un producto                 |
| PATCH       | /productos/id| modifica el precio de un producto|
| DELETE      | /productos/id| elimina un producto              |



Endpoints *Detalle_venta*

| METHOD      | Endpoint      |Descripcion                                |    
|----------   |---------      |----------                                 |
| POST        | /detalle      |Agrega un producto a una venta             |


Funcionalidades: 
    *HISTORIAL DE VENTAS*: 
        -Mostrar historial de ventas, ordenadas por fecha 
        -Se debe poder ver el precio, el detalle, método de pago y si es un pedido o no
        -Se debe poder eliminar una venta del historial.
    *PRODUCTOS*:
        -Se debe poder agregar,eliminar y editar productos.
        -Se debe poder ver el precio,nombre, etc.
    *VENTAS*:
        -Sumar x cantidad de x producto a una venta.

    

*¿?* Para crear una venta, necesito que esta tenga productos en el detalle (porque sino estaría vacia).
    pero para crear un registro de detalle_venta necesito tener la venta creada(porque necesito el id)
    gestionar desde el front.  


Terminar de configurar cors y sessions. (cuando tenga el front)

**AGREGAR VALIDACIONES (JOI)
**AGREGAR REDIS
**Agregar documentacion (swagger)
**Corregir ventas(como crearlas? a base del detalle)