<?php
// Obtener datos de la solicitud
$cod = isset($_GET["cod"]) ? $_GET["cod"] : '';
$latitud = isset($_GET["lat"]) ? $_GET["lat"] : '';
$longitud = isset($_GET["lon"]) ? $_GET["lon"] : '';

// Crear un array con los datos de ubicación
$ubicacion = array('cod' => $cod, 'lat' => $latitud, 'lon' => $longitud);

// Convertir el array a formato JSON
$json_data = json_encode($ubicacion, JSON_PRETTY_PRINT);

// Guardar el JSON en el archivo ultima_ubicacion.json
file_put_contents('ultima_ubicacion.json', $json_data);

// Devolver un mensaje de éxito (opcional)
echo "Datos de ubicación actualizados con éxito";
?>
