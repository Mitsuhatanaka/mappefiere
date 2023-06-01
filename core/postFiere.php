<?php

require 'connection.php';
$connessione=connect();

$name_conference=$connessione->real_escape_string($_REQUEST['name_conference']);
$regione=$connessione->real_escape_string($_REQUEST['regione']);
$city=$connessione->real_escape_string($_REQUEST['city']);
$address=$connessione->real_escape_string($_REQUEST['address']);
$date=$connessione->real_escape_string($_REQUEST['date']);
$website=$connessione->real_escape_string($_REQUEST['website']);
$type=$connessione->real_escape_string($_REQUEST['type']);
// $map=$connessione->real_escape_string($_REQUEST['3dmap']);
// $download_map=$connessione->real_escape_string($_REQUEST['mappdf']);

$sql= "INSERT INTO fiere(
            name_conference,
            regione,
            city,
            address,
            date,
            website,
            type) 
        VALUES
            ('$name_conference',
            '$regione',
            '$city',
            '$address',
            '$date',
            '$website',
            '$type')";

if($connessione->query($sql) === true){
    $ultimoElemento=$connessione->insert_id;
    echo "Inserimento avvenuto con successo,fiera numero: ".$ultimoElemento;
}else{
    echo "Errore nell'inserimento dei dati " . $connessione->error;
}
$connessione->close();
?>