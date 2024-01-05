<!DOCTYPE html>
<html>
<head>
    <title>Ventas</title>
    <script>
        function mostrarTabla(tablaJSON, totalPagar) {
            const tabla = JSON.parse(tablaJSON);
            const tablaHtml = document.getElementById('tablaEmergente');
            tabla.forEach(fila => {
              if (fila.cantidad > 0) {
                const row = tablaHtml.insertRow();
                const celdaNombre = row.insertCell(0);
                const celdaCantidad = row.insertCell(1);
                const celdaPrecio = row.insertCell(2);

                celdaNombre.textContent = fila.nombre;
                celdaCantidad.textContent = fila.cantidad;
                celdaPrecio.textContent = fila.precio;
              }
            });

            const totalPagarElement = document.getElementById('totalPagar');
            totalPagarElement.textContent = totalPagar;
        }
        function regresarAVentanaPrincipal() {
            window.location.href = 'index.html';
        }
    </script>
</head>
<body>
    <h1>Ventas</h1>
    <table id="tablaEmergente">
        <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
        </tr>
    </table>
    <p>Total a Pagar: <span id="totalPagar"></span></p>
    <button onclick="regresarAVentanaPrincipal()">Nueva Venta</button>
</body>
</html>
