<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Monitoreo de Mascotas</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <h1>Ingenieria de Sistemas</h1>
    <h2>Tecnologias Emergentes I</h2>
    <p>Alexandre Mamani Mendoza</p>
    <p><strong>Código:</strong> <span id="codigo"></span></p>
    <p><strong>Latitud:</strong> <span id="latitud"></span></p>
    <p><strong>Longitud:</strong> <span id="longitud"></span></p>

    <!-- Mapa de Google Maps -->
    <div id="map"></div>

    <script>
        function updateLocation() {
            // Realizar una solicitud AJAX para obtener la última ubicación
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var data = JSON.parse(xhr.responseText);
                    // Actualizar la información en la página
                    document.getElementById("codigo").innerText = data.cod;
                    document.getElementById("latitud").innerText = data.lat;
                    document.getElementById("longitud").innerText = data.lon;

                    // Actualizar el mapa si las coordenadas son válidas
                    if (data.lat !== '' && data.lon !== '') {
                        updateMap(parseFloat(data.lat), parseFloat(data.lon));
                    }
                }
            };
            xhr.open("GET", "ultima_ubicacion.json", true);
            xhr.send();
        }

        function updateMap(latitud, longitud) {
            // Actualizar el mapa con las nuevas coordenadas
            var latLng = new google.maps.LatLng(latitud, longitud);
            var mapOptions = {
                center: latLng,
                zoom: 14
            };
            var map = new google.maps.Map(document.getElementById('map'), mapOptions);
            var marker = new google.maps.Marker({
                position: latLng,
                map: map,
                title: 'Ubicación'
            });
        }

        // Actualizar la ubicación cada 5 segundos
        setInterval(updateLocation, 5000);
        // Ejecutar la primera actualización al cargar la página
        updateLocation();
    </script>

    <!-- Incluir la API de Google Maps con tu clave -->
    <script src="https://tokendegoogle"
        async defer></script>
</body>
</html>
