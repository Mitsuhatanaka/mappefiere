<?php

require 'connection.php';
$connessione=connect();

$n_pavilion=$connessione->real_escape_string($_REQUEST['n_pavilion']);
$name_conference=$connessione->real_escape_string($_REQUEST['name_conference']);

$sql= "INSERT INTO pavilion(
            n_pavilion,
            name_conference) 
        VALUES
            ('$n_pavilion',
            '$name_conference')";

if($connessione->query($sql) === true){
    $ultimoElemento=$connessione->insert_id;
    echo "Inserimento avvenuto con successo,stand numero: ".$ultimoElemento;
}else{
    echo "Errore nell'inserimento dei dati " . $connessione->error;
}
$connessione->close();
?>