<?php

require 'connection.php';
$connessione=connect();

$n_stand=$connessione->real_escape_string($_REQUEST['n_stand']);
$name_stand=$connessione->real_escape_string($_REQUEST['name_stand']);
$category=$connessione->real_escape_string($_REQUEST['category']);
$description=$connessione->real_escape_string($_REQUEST['description']);
$n_pavilion=$connessione->real_escape_string($_REQUEST['n_pavilion']);
$website=$connessione->real_escape_string($_REQUEST['website']);

$sql= "INSERT INTO stand(
            n_stand,
            name_stand,
            category,
            description,
            'n_pavilion',
            website) 
        VALUES
            ('$n_stand',
            '$name_stand',
            '$category',
            '$description',
            '$n_pavilion',
            '$website')";

if($connessione->query($sql) === true){
    $ultimoElemento=$connessione->insert_id;
    echo "Inserimento avvenuto con successo,stand numero: ".$ultimoElemento;
}else{
    echo "Errore nell'inserimento dei dati " . $connessione->error;
}
$connessione->close();
?>